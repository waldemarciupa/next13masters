import { type ProductItemType } from "@/ui/types";

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

export const getProducts = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await res.json()) as ProductResponseItemType[];

	const products = productsResponse.map(
		(product): ProductItemType => ({
			id: product.id,
			category: product.category,
			name: product.title,
			price: product.price,
			coverImage: {
				src: product.image,
				alt: product.title,
			},
		}),
	);

	return products;
};

export const getProductById = async (id: string) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItemType;

	const product: ProductItemType = {
		id: productResponse.id,
		category: productResponse.category,
		name: productResponse.title,
		price: productResponse.price,
		coverImage: {
			src: productResponse.image,
			alt: productResponse.title,
		},
	};

	return product;
};
