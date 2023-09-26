import { type ProductItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria: </span> {categories[0] ? categories[0].name : "Brak"}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span> {formatPrice(price / 100)}
			</p>
		</div>
	);
};
