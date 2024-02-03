"use server";

import { executeGraphql } from "@/api/executeGraphql";
import { CartDeleteOrderItemDocument, CartSetProductQuantityDocument } from "@/gql/graphql";

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

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: { itemId, quantity },
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});
};
