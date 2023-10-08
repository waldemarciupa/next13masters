import { getCollections } from "@/api/collections";
import { getProductsList } from "@/api/products";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProductsList(4);
	const collections = await getCollections();

	return (
		<div>
			<CollectionList collections={collections} />
			<section className="mx-auto max-w-md py-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
				<ProductList products={products} />
			</section>
		</div>
	);
}
