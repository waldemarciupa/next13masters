"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { ReviewButton as SubmitButton } from "../atoms/ReviewButton";
import { ErrorHelperText } from "../atoms/ErrorHelperText";
import { ReviewRating } from "./ReviewRating";
import { ReviewFormField } from "./ReviewFormField";
import { addReview } from "@/app/review/actions";

export const ReviewsForm = ({ productId }: { productId: string }) => {
	const [state, formAction] = useFormState(addReview, null);
	const ref = useRef<HTMLFormElement>(null);

	return (
		<form
			ref={ref}
			action={formAction}
			data-testid="add-review-form"
			className="mt-4 flex flex-col"
		>
			<input type="hidden" name="productId" value={productId} />
			<ReviewRating />
			{fields.map((field) => (
				<ReviewFormField key={field.name} {...field} state={state} />
			))}
			<SubmitButton />
			{state?.success && <div className="text-green-500">Review added successfully</div>}
			{state?.error && <ErrorHelperText>{state?.error}</ErrorHelperText>}
		</form>
	);
};

const fields = [
	{
		htmlFor: "headline",
		title: "Review title",
		name: "headline",
		type: "text",
	},
	{
		htmlFor: "content",
		title: "Review content",
		name: "content",
		type: "textarea",
	},
	{
		htmlFor: "name",
		title: "Name",
		name: "name",
		type: "text",
	},
	{
		htmlFor: "email",
		title: "Email",
		name: "email",
		type: "email",
	},
];
