export default function Page({ params }: { params: { id: string } }) {
	return <div>Product id: {params.id}</div>;
}
