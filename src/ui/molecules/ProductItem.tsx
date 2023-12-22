import { revalidateTag } from "next/cache";
import { Suspense } from "react";
import Image from "next/image";
import { ReviewList } from "./ReviewList";
import { ReviewAside } from "./ReviewAside";
import { getProductById } from "@/api/products";
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
		await addToCart(cart.id, product.id, cart);

		revalidateTag("cart");
	}

	return (
		<div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{product.images[0] && (
					<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
						<Image
							priority
							width={320}
							height={320}
							alt={product.name}
							src={product.images[0].url}
							fetchPriority="high"
							className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
						/>
					</div>
				)}
				<div className="mt-4 sm:mx-6 sm:mt-0">
					<ProductItemDescription product={product} />
					{product.variants.length > 0 && (
						<div className="mt-4">
							<label htmlFor="variants" className="block text-sm font-medium text-gray-700">
								Variants
							</label>
							<select
								id="variants"
								name="variants"
								className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							>
								{product.variants.map((variant) => (
									<option key={variant.id} value={variant.id}>
										{variant.name}
									</option>
								))}
							</select>
						</div>
					)}
					<form action={addToCartAction}>
						<input type="hidden" name="productId" value={product.id} />
						<AddToCartButton />
					</form>
				</div>
			</div>
			<Suspense>
				<RelatedProductList product={product} />
			</Suspense>
			<div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:py-16">
				<ReviewAside productId={product.id} />
				<ReviewList reviews={product.reviews} />
			</div>
		</div>
	);
};
