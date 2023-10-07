import { getProductsList } from "@/api/products";
import { Header } from "@/ui/organisms/Header";
import { ProductList } from "@/ui/organisms/ProductList";

type PageProps = {
	params: { id: string };
};

export default async function Page({ params }: PageProps) {
	const products = await getProductsList(20);

	return (
		<div>
			<Header params={params} />
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
				<ProductList products={products} />
			</section>
		</div>
	);
}
