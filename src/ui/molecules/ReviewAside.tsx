import { ReviewsForm } from "./ReviewForm";

export const ReviewAside = ({ productId }: { productId: string }) => {
	return (
		<div className=" lg:col-span-4">
			<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
			<p className="mt-1 text-sm text-gray-600">
				If you’ve used this product, share your thoughts with other customers
			</p>
			<ReviewsForm productId={productId} />
		</div>
	);
};
