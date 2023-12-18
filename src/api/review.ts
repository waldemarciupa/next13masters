import { executeGraphql } from "./executeGraphql";
import { ReviewCreateDocument, type ReviewCreateInput } from "@/gql/graphql";

export const createReview = async (review: ReviewCreateInput) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewCreateDocument,
		variables: { data: review },
	});
	return graphqlResponse.createReview;
};
