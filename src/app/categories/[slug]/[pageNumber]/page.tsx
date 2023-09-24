import { getProductsByCategory } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Page({ params }: { params: { slug: string; pageNumber: string } }) {
	const products = await getProductsByCategory(params.slug);

	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
			<ProductList products={products} />
		</section>
	);
}
