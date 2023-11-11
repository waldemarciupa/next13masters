import { ReviewItem } from "./ReviewItem";
import { type ProductItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price, reviews },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2">
			<div className="flex justify-between">
				<h3 className="truncate text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Cena:</span> {formatPrice(price / 100)}
				</p>
			</div>
			<div className="flex justify-between text-sm text-gray-500">
				<span className="sr-only">Kategoria: </span> {categories[0] ? categories[0].name : "Brak"}
				{reviews.length > 0 && <ReviewItem reviews={reviews} />}
			</div>
		</div>
	);
};
