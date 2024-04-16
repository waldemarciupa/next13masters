"use server";

import { revalidatePath } from "next/cache";
import { Stripe } from "stripe";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/executeGraphql";
import { CartAddOrUpdateOrderDocument, CartDeleteOrderItemDocument } from "@/gql/graphql";
import { type OrderItem } from "@/ui/molecules/CartItem";
import { getCartByCookieId } from "@/api/cart";

export const removeItem = (
	orderId: string,
	orderItemId: string,
	total: number,
	itemTotal: number,
) => {
	const updatedTotal = total - itemTotal;

	return executeGraphql({
		query: CartDeleteOrderItemDocument,
		variables: { orderId, orderItemId, total: updatedTotal },
	});
};

export const changeItemQuantity = async (
	cartId: string,
	cartTotal: number,
	item: OrderItem,
	quantity: number,
	orderTotal: number,
) => {
	await executeGraphql({
		query: CartAddOrUpdateOrderDocument,
		variables: {
			orderId: cartId,
			orderTotal: cartTotal,
			productId: item?.product?.id ?? "",
			total: orderTotal,
			orderItemId: item.id,
			quantity: quantity,
		},
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});

	revalidatePath("/cart");
};

export async function handlePaymentAction() {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not set");
	}

	const cart = await getCartByCookieId();

	if (!cart) {
		throw new Error("Cart not found");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product?.name || "",
					images: [item.product?.images[0]?.url || ""],
				},
				unit_amount: item.product?.price || 0,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: "http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel?session_id={CHECKOUT_SESSION_ID}",
	});

	if (!checkoutSession.url) {
		throw new Error("Something went wrong");
	}

	cookies().set("cartId", cart.id);
	redirect(checkoutSession.url);
}
