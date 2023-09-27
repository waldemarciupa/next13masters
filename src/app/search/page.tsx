import { getProductsBySearch } from "@/api/products";
import { Header } from "@/ui/organisms/Header";
import { ProductList } from "@/ui/organisms/ProductList";

type SearchParams = {
	query: string;
};

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
	const products = await getProductsBySearch(searchParams.query.trim());

	return (
		<div>
			<Header query={searchParams.query} items={products.length} />
			{products.length > 0 && (
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
					<ProductList products={products} />
				</section>
			)}
		</div>
	);
}
