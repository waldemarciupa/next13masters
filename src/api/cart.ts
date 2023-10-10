import { cookies } from "next/headers";
import { executeGraphql } from "@/api/executeGraphql";
import {
	type CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddOrUpdateOrderDocument,
} from "@/gql/graphql";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartByCookieId();

	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", cart.createOrder.id, { httpOnly: true, sameSite: "lax" });

	return cart.createOrder;
}

export async function getCartByCookieId() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql({ query: CartGetByIdDocument, variables: { id: cartId } });

		if (cart.order) {
			return cart.order;
		}
	}
}

export function createCart() {
	return executeGraphql({ query: CartCreateDocument });
}

export async function addToCart(orderId: string, productId: string, cart: CartFragment) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	if (!product) {
		throw new Error("Product not found");
	}

	const orderItem = cart.orderItems.find((p) => p.product?.id === productId);

	await executeGraphql({
		query: CartAddOrUpdateOrderDocument,
		variables: {
			orderId: orderId,
			orderTotal: (cart?.total ?? 0) + product.price,
			productId: productId,
			total: (orderItem?.total ?? 0) + 1,
			orderItemId: orderItem?.id || "",
			quantity: (orderItem?.quantity ?? 0) + 1,
		},
	});
}
