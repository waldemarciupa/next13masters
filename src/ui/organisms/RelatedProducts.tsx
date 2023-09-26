import { type ProductItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const RelatedProductList = ({ products }: { products: ProductItemFragment[] }) => {
	return (
		<div className="my-8">
			<h2 className="py-8 text-xl font-semibold leading-7">Related Products</h2>
			<ul
				data-testid="related-products"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
		</div>
	);
};
