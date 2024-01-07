import { ReviewItem } from "../atoms/ReviewItem";

type Reviews = {
	reviews: {
		id: string;
		name: string;
		email: string;
		headline: string;
		content: string;
		rating: number;
	}[];
};

export const ReviewList = ({ reviews }: Reviews) => {
	return (
		<div className="mt-16  lg:col-span-7 lg:col-start-6 lg:mt-0">
			<h3 className="text-lg font-medium text-gray-900">Reviews</h3>
			<div className="mt-1 divide-y divide-gray-200">
				{reviews.length > 0 ? (
					reviews.map((review) => (
						<div className="py-6" key={review.id}>
							<div className="flex flex-row justify-between">
								<h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
								<ReviewItem reviews={review.rating} />
							</div>

							<p className="mb-2 mt-2 space-y-6 text-sm font-bold text-gray-600">
								{review.headline}
							</p>
							<p className="mt-2 text-sm italic text-gray-600">{review.content}</p>
						</div>
					))
				) : (
					<p className="mt-2 text-sm italic text-gray-600">No reviews yet</p>
				)}
			</div>
		</div>
	);
};
