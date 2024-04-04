"use server";

import { revalidatePath } from "next/cache";
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

export const changeItemQuantity = async (itemId: string, quantity: number, total: number) => {
	await executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: { itemId, quantity, total },
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});

	revalidatePath("/cart");
};
