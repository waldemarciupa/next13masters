import { getProductById, getProductsByRelated } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { RelatedProductList } from "@/ui/organisms/RelatedProducts";

type ProductItemProps = {
	id: string;
};

export const ProductItem = async ({ id }: ProductItemProps) => {
	const product = await getProductById(id);
	const products = await getProductsByRelated(
		product.categories[0] ? product.categories[0]?.name : "",
	);

	return (
		<div>
			<div className="flex flex-col sm:flex-row">
				<div>
					{product.images[0] && (
						<ProductCoverImage src={product.images[0].url} alt={product.name} />
					)}
				</div>
				<div className="mt-4 sm:mx-6 sm:mt-0 sm:w-4/12">
					<ProductItemDescription product={product} />
				</div>
			</div>
			<RelatedProductList products={products} />
		</div>
	);
};
