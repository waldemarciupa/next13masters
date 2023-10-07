import type { Metadata } from "next";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { getProductById, getProductsList } from "@/api/products";

type PageProps = {
	params: { id: string };
};

export const generateStaticParams = async () => {
	const products = await getProductsList(20);
	return products.map((product) => ({ id: product.id }));
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = params;
	const product = await getProductById(id);

	return {
		title: product.name,
		description: product.description,
	};
}

export default async function Page({ params }: PageProps) {
	return (
		<div className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
			<ProductItem id={params.id} />
		</div>
	);
}
