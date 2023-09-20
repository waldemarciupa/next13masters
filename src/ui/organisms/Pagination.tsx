import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = () => {
	return (
		<nav aria-label="Pagination">
			<ul className="my-4 flex w-auto justify-center">
				<li className="p-1">
					<ActiveLink href={"/products/1"}>1</ActiveLink>
				</li>
				<li className="p-1">
					<ActiveLink href={"/products/2"}>2</ActiveLink>
				</li>
				<li className="p-1">
					<ActiveLink href={"/products/3"}>3</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
