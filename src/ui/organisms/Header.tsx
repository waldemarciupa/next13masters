type HeaderProps =
	| {
			params: { id: string; slug?: undefined; pageNumber?: undefined };
			query?: string;
			items?: number;
	  }
	| { params: { id?: undefined; slug: string; pageNumber: string }; query?: string; items?: number }
	| {
			params: { id?: undefined; slug: string; pageNumber?: undefined };
			query?: string;
			items?: number;
	  }
	| {
			params?: undefined;
			query: string;
			items: number;
	  };

export const Header = ({ params, query, items }: HeaderProps) => {
	if (!params) {
		return (
			<div className="bg-gray-100 px-8">
				<div className="container mx-auto py-8">
					<h2 className="font-medium">{`Found ${items} items for phrase "${query}"`}</h2>
				</div>
			</div>
		);
	}

	const { slug } = params;
	const category = slug && slug.charAt(0).toUpperCase() + slug.slice(1);

	return (
		<div className="bg-gray-100 px-8">
			<div className="container mx-auto py-8 capitalize">
				<h2 className="font-medium">{slug ? category : "All products"}</h2>
			</div>
		</div>
	);
};
