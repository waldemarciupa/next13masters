import { revalidateTag } from "next/cache";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { RelatedProductList } from "@/ui/organisms/RelatedProducts";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { getOrCreateCart, addToCart } from "@/api/cart";

type ProductItemProps = {
	id: string;
};

export const ProductItem = async ({ id }: ProductItemProps) => {
	const product = await getProductById(id);

	async function addToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		await addToCart(cart.id, product.id);

		revalidateTag("cart");
	}

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
					<form action={addToCartAction}>
						<input type="hidden" name="productId" value={product.id} />
						<AddToCartButton />
					</form>
				</div>
			</div>
			<RelatedProductList product={product} />
		</div>
	);
};
