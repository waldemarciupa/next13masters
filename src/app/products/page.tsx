import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "shoes",
		name: "Nike Air Max 270",
		price: 15000,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Nike Air Max 270",
		},
	},
	{
		id: "2",
		category: "shoes",
		name: "Nike Air Max 270",
		price: 15000,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Nike Air Max 270",
		},
	},
	{
		id: "3",
		category: "shoes",
		name: "Nike Air Max 270",
		price: 15000,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Nike Air Max 270",
		},
	},
	{
		id: "4",
		category: "shoes",
		name: "Nike Air Max 270",
		price: 15000,
		coverImage: {
			src: "/product_1.jpg",
			alt: "Nike Air Max 270",
		},
	},
];

export default function Page() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
			<ProductList products={products} />
		</section>
	);
}
