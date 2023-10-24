import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({ pagesLength }: { pagesLength: number }) => {
	return (
		<nav aria-label="Pagination">
			<ul className="my-4 flex w-auto justify-center">
				{[...Array<number>(pagesLength)].map((_, i) => {
					return (
						<li key={i} className="p-1">
							<ActiveLink href={`/products/${i + 1}`}>{i + 1}</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
