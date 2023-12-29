import { useState } from "react";
import { ReviewStar } from "./ReviewStar";
import { ReviewHeadline } from "@/ui/atoms/ReviewHeadline";

export const ReviewRating = () => {
	const [rating, setRating] = useState(0);

	return (
		<div className="mb-4">
			<ReviewHeadline htmlFor="rating">Rating</ReviewHeadline>
			<fieldset className="flex gap-x-2">
				{[1, 2, 3, 4, 5].map((r) => (
					<ReviewStar key={r} r={r} rating={rating} setRating={setRating} />
				))}
			</fieldset>
		</div>
	);
};
