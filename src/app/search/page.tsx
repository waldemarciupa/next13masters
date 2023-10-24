import { getProductsBySearch } from "@/api/products";
import { SectionWrapper } from "@/ui/molecules/SectionWrapper";
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
				<SectionWrapper>
					<ProductList products={products} />
				</SectionWrapper>
			)}
		</div>
	);
}
