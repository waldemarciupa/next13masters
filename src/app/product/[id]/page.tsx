import type { Metadata } from "next";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { getProductById } from "@/api/products";

type Props = {
	params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = params;
	const product = await getProductById(id);

	return {
		title: product.name,
		description: product.description,
	};
}

export default async function Page({ params }: { params: { id: string } }) {
	return <ProductItem id={params.id} />;
}
