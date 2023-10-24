import { getProductsList } from "@/api/products";
import { SectionWrapper } from "@/ui/molecules/SectionWrapper";
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
			<SectionWrapper>
				<ProductList products={products} />
			</SectionWrapper>
		</div>
	);
}
