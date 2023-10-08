import type { Metadata } from "next";
import { getProductsByCategory } from "@/api/products";
import { Header } from "@/ui/organisms/Header";
import { ProductList } from "@/ui/organisms/ProductList";

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
			<section className="mx-auto max-w-md py-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
				<ProductList products={products} />
			</section>
		</div>
	);
}
