import { Star } from "lucide-react";
import { ReviewHeadline } from "@/ui/atoms/ReviewHeadline";

export const ReviewRating = () => {
	{
		/* TODO: Implement rating */
	}
	return (
		<div>
			<ReviewHeadline>Rating</ReviewHeadline>
			<fieldset className="flex gap-x-2">
				<label htmlFor="rating-1">
					<Star color="grey" strokeWidth={1} />
				</label>
				<input type="radio" className="sr-only" id="rating-1" name="rating" value={1} />
				<label htmlFor="rating-2">
					<Star color="grey" strokeWidth={1} />
				</label>
				<input type="radio" className="sr-only" id="rating-2" name="rating" value={2} />
				<label htmlFor="rating-3">
					<Star color="grey" strokeWidth={1} />
				</label>
				<input type="radio" className="sr-only" id="rating-3" name="rating" value={3} />
				<label htmlFor="rating-4">
					<Star color="grey" strokeWidth={1} />
				</label>
				<input type="radio" className="sr-only" id="rating-4" name="rating" value={4} />
				<label htmlFor="rating-5">
					<Star color="grey" strokeWidth={1} />
				</label>
				<input type="radio" className="sr-only" id="rating-5" name="rating" value={5} />
			</fieldset>
		</div>
	);
};
