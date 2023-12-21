"use server";

import { revalidatePath } from "next/cache";
import { type ReviewCreateInput } from "@/gql/graphql";
import { createReview } from "@/api/review";

export async function addReview(currentState: unknown, formData: FormData) {
	const data: ReviewCreateInput = {
		content: formData.get("content") as string,
		email: formData.get("email") as string,
		headline: formData.get("headline") as string,
		name: formData.get("name") as string,
		product: { connect: { id: formData.get("productId") as string } },
		rating: 5,
	};

	try {
		await createReview(data);
		revalidatePath("/product/[id]", "page");
	} catch (error) {
		return "Failed to add review";
	}
}
