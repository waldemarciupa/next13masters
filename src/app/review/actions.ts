"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { type ReviewCreateInput } from "@/gql/graphql";
import { createReview, publishReview } from "@/api/review";

const schema = z.object({
	content: z.string().min(3, { message: "Content must be 3 or more character long" }).max(300),
	email: z.string().email(),
	headline: z.string().min(3, { message: "Headline must be 3 or more character long" }).max(100),
	name: z.string().min(3, { message: "Name must be 3 or more character long" }).max(100),
	product: z.object({ connect: z.object({ id: z.string() }) }),
	rating: z.number().int().min(1).max(5),
});

export async function addReview(_currentState: unknown, formData: FormData) {
	const validatedFields = schema.safeParse({
		content: formData.get("content") as string,
		email: formData.get("email") as string,
		headline: formData.get("headline") as string,
		name: formData.get("name") as string,
		product: { connect: { id: formData.get("productId") as string } },
		rating: Number(formData.get("rating")),
	});

	if (!validatedFields.success) {
		return { errors: validatedFields.error.flatten() };
	} else {
		const data = validatedFields.data as ReviewCreateInput;

		try {
			const review = await createReview(data);
			if (!review) {
				return { error: "Failed to add review" };
			}
			await publishReview(review.id);
			revalidatePath("/product/[id]", "page");
			return { success: "Review added" };
		} catch (error) {
			return { error: "Failed to add review" };
		}
	}
}
