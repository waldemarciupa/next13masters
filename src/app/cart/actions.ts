"use server";

import { executeGraphql } from "@/api/executeGraphql";
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";

export const removeItem = (itemId: string) => {
	console.log("removeItem", itemId);

	return executeGraphql({ query: CartRemoveProductDocument, variables: { itemId } });
};

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({ query: CartSetProductQuantityDocument, variables: { itemId, quantity } });
};
