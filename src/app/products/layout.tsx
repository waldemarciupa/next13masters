import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const products = await getProductsList(0, 100);
	const pagesLength = Math.ceil(products.length / 8);

	return (
		<>
			<div>{children}</div>;
			<Pagination pagesLength={pagesLength} />
		</>
	);
}
