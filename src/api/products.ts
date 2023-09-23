import { notFound } from "next/navigation";
import { type ProductItemType } from "@/ui/types";
import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphql";

export const getProducts = async (take: number): Promise<ProductItemType[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take });

	return graphqlResponse.products.map((product) => ({
		id: product.id,
		description: product.description,
		category: product.categories[0]?.name,
		name: product.name,
		price: product.price,
		coverImage: product.images[0] && {
			src: product.images[0].url,
			alt: product.name,
		},
	}));
};

export const getProductById = async (id: string): Promise<ProductItemType> => {
	const productResponse = await executeGraphql(ProductGetByIdDocument, { id });

	const { product } = productResponse;

	if (!product) {
		throw notFound();
	}

	return {
		id: product.id,
		category: product.categories[0]?.name,
		description: product.description,
		name: product.name,
		price: product.price,
		coverImage: product.images[0] && {
			src: product.images[0].url,
			alt: product.name,
		},
	};
};
