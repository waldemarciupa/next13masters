import { ProductItem } from "@/ui/molecules/ProductItem";

export default function Page({ params }: { params: { id: string } }) {
	return <ProductItem id={params.id} />;
}
