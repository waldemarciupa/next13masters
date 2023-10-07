import { notFound } from "next/navigation";
import {
	ProductGetByIdDocument,
	ProductGetBySearchDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetByRelatedDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphql";

export const getProductsList = async (take: number) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { take },
		next: {
			revalidate: 10,
		},
	});
	return graphqlResponse.products;
};

export const getProductsByCategory = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug },
	});
	return graphqlResponse.products;
};

export const getProductsByCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug },
	});
	return graphqlResponse.products;
};

export const getProductsByRelated = async (name: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByRelatedDocument,
		variables: { name },
	});
	return graphqlResponse.products;
};

export const getProductsBySearch = async (searchQuery: string) => {
	if (!searchQuery) {
		return [];
	}

	const graphqlResponse = await executeGraphql({
		query: ProductGetBySearchDocument,
		variables: { searchQuery },
	});
	return graphqlResponse.products;
};

export const getProductById = async (id: string) => {
	const productResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
	});
	const { product } = productResponse;

	if (!product) {
		throw notFound();
	}

	return product;
};
