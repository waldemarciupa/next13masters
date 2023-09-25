import { executeGraphql } from "@/api/executeGraphql";
import { CollectionsGetBySlugDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql(CollectionsGetListDocument);
	return graphqlResponse.collections;
};

export const getCollectionsBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(CollectionsGetBySlugDocument, { slug });
	return graphqlResponse.collections;
};
