import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: ProductItemFragment[] }) => {
	return (
		<div>
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
		</div>
	);
};
