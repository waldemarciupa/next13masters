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
				<ErrorHelperText>
					{state?.fieldErrors?.headline && state?.fieldErrors?.headline[0]}
				</ErrorHelperText>
			</div>
			<div>
				<ReviewHeadline htmlFor="content">Review content</ReviewHeadline>
				<ReviewInput name="content" type="textarea" />
				<ErrorHelperText>
					{state?.fieldErrors?.content && state?.fieldErrors?.content[0]}
				</ErrorHelperText>
			</div>
			<div>
				<ReviewHeadline htmlFor="name">Name</ReviewHeadline>
				<ReviewInput name="name" type="text" />
				<ErrorHelperText>{state?.fieldErrors?.name && state?.fieldErrors?.name[0]}</ErrorHelperText>
			</div>
			<div>
				<ReviewHeadline htmlFor="email">Email</ReviewHeadline>
				<ReviewInput name="email" type="email" />
				<ErrorHelperText>
					{state?.fieldErrors?.email && state?.fieldErrors?.email[0]}
				</ErrorHelperText>
			</div>
			<SubmitButton />
			<ErrorHelperText>{state?.message && state?.message}</ErrorHelperText>
		</form>
	);
};
