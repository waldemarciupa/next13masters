import { ReviewStar } from "./ReviewStar";
import { ReviewHeadline } from "@/ui/atoms/ReviewHeadline";

export const ReviewRating = ({
	rating,
	setRating,
}: {
	rating: number;
	setRating: (r: number) => void;
}) => {
	return (
		<div>
			<ReviewHeadline htmlFor="rating">Rating</ReviewHeadline>
			<fieldset className="flex gap-x-2">
				{[1, 2, 3, 4, 5].map((r) => (
					<ReviewStar key={r} r={r} rating={rating} setRating={setRating} />
				))}
			</fieldset>
		</div>
	);
};
