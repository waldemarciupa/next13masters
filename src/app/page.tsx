import { getCollections } from "@/api/collections";
import { getProductsList } from "@/api/products";
import { SectionWrapper } from "@/ui/molecules/SectionWrapper";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProductsList(0, 4);
	const collections = await getCollections();

	return (
		<div>
			<CollectionList collections={collections} />
			<SectionWrapper>
				<ProductList products={products} />
			</SectionWrapper>
		</div>
	);
}
