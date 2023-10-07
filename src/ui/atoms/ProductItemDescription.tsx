import { type ProductItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

type ProductItemDescriptionProps = {
	product: ProductItemFragment;
};

export const ProductItemDescription = ({
	product: { name, description, price },
}: ProductItemDescriptionProps) => {
	return (
		<div>
			<div className="mb-8 mt-2 flex justify-between">
				<div>
					<h1 className="text-sm font-semibold text-gray-700">{name}</h1>
				</div>
				<div>
					<p className="text-sm font-medium text-gray-900">
						<span className="sr-only">Cena:</span> {formatPrice(price / 100)}
					</p>
				</div>
			</div>
			<div>{description}.</div>
		</div>
	);
};
