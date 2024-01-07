import { executeGraphql } from "./executeGraphql";
import { ReviewCreateDocument, ReviewPublishDocument, type ReviewCreateInput } from "@/gql/graphql";

export const createReview = async (review: ReviewCreateInput) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewCreateDocument,
		variables: { data: review },
	});
	return graphqlResponse.createReview;
};

export const publishReview = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewPublishDocument,
		variables: { id },
	});
	return graphqlResponse.publishReview;
};
