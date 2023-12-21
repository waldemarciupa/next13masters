"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRef } from "react";
import { addReview } from "@/app/review/actions";
import { ReviewHeadline } from "@/ui/atoms/ReviewHeadline";
import { ReviewInput } from "@/ui/atoms/ReviewInput";
import { ReviewRating } from "@/ui/molecules/ReviewRating";

export const ReviewsForm = ({ productId }: { productId: string }) => {
	const { pending } = useFormStatus();
	const [state, formAction] = useFormState(addReview, null);
	const ref = useRef<HTMLFormElement>(null);

	return (
		<div className=" lg:col-span-4">
			<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
			<p className="mt-1 text-sm text-gray-600">
				If you’ve used this product, share your thoughts with other customers
			</p>
			<form
				ref={ref}
				action={(payload: FormData) => {
					formAction(payload);
					ref.current?.reset();
				}}
				data-testid="add-review-form"
				className="mt-2 flex flex-col gap-y-2"
			>
				<input type="hidden" name="productId" value={productId} />
				<label htmlFor="headline">
					<ReviewHeadline>Review title</ReviewHeadline>
					<ReviewInput name="headline" type="text" />
				</label>
				<label htmlFor="content">
					<ReviewHeadline>Review content</ReviewHeadline>
					<ReviewInput name="content" type="textarea" />
				</label>
				<ReviewRating />
				<label htmlFor="name">
					<ReviewHeadline>Name</ReviewHeadline>
					<ReviewInput name="name" type="text" />
				</label>
				<label htmlFor="email">
					<ReviewHeadline>Email</ReviewHeadline>
					<ReviewInput name="email" type="email" />
				</label>
				<button
					type="submit"
					disabled={pending}
					className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700"
				>
					Submit review
				</button>
				<p className="text-red-500">{state}</p>
			</form>
		</div>
	);
};
