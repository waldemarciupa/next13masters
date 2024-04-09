"use server";

import { revalidatePath } from "next/cache";
import { executeGraphql } from "@/api/executeGraphql";
import { CartAddOrUpdateOrderDocument, CartDeleteOrderItemDocument } from "@/gql/graphql";
import { type OrderItem } from "@/ui/molecules/CartItem";

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
