import { type Metadata } from "next";
import { getCollectionsBySlug } from "@/api/collections";
import { getProductsByCollection } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { SectionWrapper } from "@/ui/molecules/SectionWrapper";

type PageProps = {
	params: { slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const collection = await getCollectionsBySlug(params.slug);

	return {
		title: collection[0]?.name,
	};
}

export default async function Page({ params }: PageProps) {
	const products = await getProductsByCollection(params.slug);
	const collection = await getCollectionsBySlug(params.slug);

	return (
		<>
			<div className="bg-gray-100 px-4 sm:px-8">
				<div className="container mx-auto py-8 capitalize">
					<h1 className="text-3xl font-bold tracking-tight text-slate-900" role="heading">
						{collection[0]?.name}
					</h1>
					<p className="mt-4 max-w-2xl text-base text-slate-700">{collection[0]?.description}</p>
				</div>
			</div>
			<SectionWrapper>
				<ProductList products={products} />
			</SectionWrapper>
		</>
	);
}
