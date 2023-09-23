import { type ProductItemType } from "@/ui/types";
import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/executeGraphql";

type ProductResponseItemType = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

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

export const getProductById = async (id: string) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItemType;

	const product: ProductItemType = {
		id: productResponse.id,
		category: productResponse.category,
		description: productResponse.description,
		name: productResponse.title,
		price: productResponse.price,
		coverImage: {
			src: productResponse.image,
			alt: productResponse.title,
		},
	};

	return product;
};
