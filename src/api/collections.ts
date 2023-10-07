import { executeGraphql } from "@/api/executeGraphql";
import { CollectionsGetBySlugDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsGetListDocument });
	return graphqlResponse.collections;
};

export const getCollectionsBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetBySlugDocument,
		variables: { slug },
	});
	return graphqlResponse.collections;
};
