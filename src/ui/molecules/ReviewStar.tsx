import { Star } from "lucide-react";
import { type MouseEvent } from "react";

export const ReviewStar = ({
	r,
	rating,
	setRating,
}: {
	r: number;
	rating: number;
	setRating: (r: number) => void;
}) => {
	return (
		<>
			<label htmlFor={`rating-${r}`}>
				<Star
					className="cursor-pointer"
					color={rating >= r ? "gold" : "grey"}
					fill={rating >= r ? "gold" : "transparent"}
					strokeWidth={1}
				/>
			</label>
			<input
				onClick={(e: MouseEvent<HTMLInputElement>) => {
					setRating(+e?.currentTarget?.value);
				}}
				type="radio"
				className="sr-only"
				id={`rating-${r}`}
				name="rating"
				value={r}
			/>
		</>
	);
};
