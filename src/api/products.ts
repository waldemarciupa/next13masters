import { notFound } from "next/navigation";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetByRelatedDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphql";

export const getProducts = async (take: number) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take });
	return graphqlResponse.products;
};

export const getProductsByCategory = async (slug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, { slug });
	return graphqlResponse.products;
};

export const getProductsByCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCollectionSlugDocument, { slug });
	return graphqlResponse.products;
};

export const getProductsByRelated = async (name: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByRelatedDocument, { name });
	return graphqlResponse.products;
};

export const getProductById = async (id: string) => {
	const productResponse = await executeGraphql(ProductGetByIdDocument, { id });
	const { product } = productResponse;

	if (!product) {
		throw notFound();
	}

	return product;
};
