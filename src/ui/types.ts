export type ProductItemType = {
	id: string;
	description?: string;
	category: string;
	name: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};
