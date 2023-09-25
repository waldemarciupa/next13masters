import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";

type ProductItemProps = {
	id: string;
};

export const ProductItem = async ({ id }: ProductItemProps) => {
	const product = await getProductById(id);

	return (
		<div>
			<div className="flex flex-col sm:flex-row">
				<div>
					{product.coverImage && (
						<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
					)}
				</div>
				<div className="mt-4 sm:mx-6 sm:mt-0 sm:w-4/12">
					<ProductItemDescription product={product} />
				</div>
			</div>
		</div>
	);
};
