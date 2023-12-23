"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";
import { ReviewHeadline } from "../atoms/ReviewHeadline";
import { ReviewInput } from "../atoms/ReviewInput";
import { ReviewButton as SubmitButton } from "../atoms/ReviewButton";
import { ErrorHelperText } from "../atoms/ErrorHelperText";
import { ReviewRating } from "./ReviewRating";
import { addReview } from "@/app/review/actions";

export const ReviewsForm = ({ productId }: { productId: string }) => {
	const [state, formAction] = useFormState(addReview, null);
	console.log(state);
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
			<div>
				<ReviewHeadline htmlFor="headline">Review title</ReviewHeadline>
				<ReviewInput name="headline" type="text" />
				<ErrorHelperText>{state?.errors && state?.errors?.fieldErrors?.headline}</ErrorHelperText>
			</div>
			<div>
				<ReviewHeadline htmlFor="content">Review content</ReviewHeadline>
				<ReviewInput name="content" type="textarea" />
				<ErrorHelperText>{state?.errors && state?.errors?.fieldErrors?.content}</ErrorHelperText>
			</div>
			<div>
				<ReviewHeadline htmlFor="name">Name</ReviewHeadline>
				<ReviewInput name="name" type="text" />
				<ErrorHelperText>{state?.errors && state?.errors?.fieldErrors?.name}</ErrorHelperText>
			</div>
			<div>
				<ReviewHeadline htmlFor="email">Email</ReviewHeadline>
				<ReviewInput name="email" type="email" />
				<ErrorHelperText>{state?.errors && state?.errors?.fieldErrors?.email}</ErrorHelperText>
			</div>
			<SubmitButton />
			{state?.success && <div className="text-green-500">Review added successfully</div>}
			{state?.error && <ErrorHelperText>{state?.error}</ErrorHelperText>}
		</form>
	);
};
