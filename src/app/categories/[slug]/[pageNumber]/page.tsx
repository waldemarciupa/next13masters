import type { Metadata } from "next";
import { getProductsByCategory } from "@/api/products";
import { Header } from "@/ui/organisms/Header";
import { ProductList } from "@/ui/organisms/ProductList";
import { SectionWrapper } from "@/ui/molecules/SectionWrapper";

type PageProps = {
	params: { slug: string; pageNumber: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = params;
	const category = slug.charAt(0).toUpperCase() + slug.slice(1);

	return {
		title: category,
	};
}

export default async function Page({ params }: PageProps) {
	const products = await getProductsByCategory(params.slug);

	return (
		<div>
			<Header params={params} />
			<SectionWrapper>
				<ProductList products={products} />
			</SectionWrapper>
		</div>
	);
}
