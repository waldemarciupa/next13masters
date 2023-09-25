type HeaderProps =
	| { params: { id: string; slug?: undefined; pageNumber?: undefined } }
	| { params: { id?: undefined; slug: string; pageNumber: string } }
	| { params: { id?: undefined; slug: string; pageNumber?: undefined } };

export const Header = ({ params }: HeaderProps) => {
	const { slug } = params;
	const category = slug && slug.charAt(0).toUpperCase() + slug.slice(1);

	return (
		<div className="bg-gray-100">
			<div className="container mx-auto py-8 capitalize">
				<h2 className="font-medium">{slug ? category : "All products"}</h2>
			</div>
		</div>
	);
};
