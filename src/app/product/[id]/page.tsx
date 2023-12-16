import type { Metadata } from "next";
import { ProductItem } from "@/ui/molecules/ProductItem";
import { getProductById, getProductsList } from "@/api/products";
import { SectionWrapper } from "@/ui/molecules/SectionWrapper";

type PageProps = {
	params: { id: string };
};

export const generateStaticParams = async () => {
	const products = await getProductsList(0, 100);
	return products.map((product) => ({ id: product.id }));
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = params;
	const product = await getProductById(id);

	return {
		metadataBase: new URL("http://localhost:3000"),
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product?.images[0]?.url || "",
					width: 800,
					height: 600,
					alt: product.name,
				},
			],
		},
	};
}

export default async function Page({ params }: PageProps) {
	return (
		<SectionWrapper>
			<ProductItem id={params.id} />
		</SectionWrapper>
	);
}
