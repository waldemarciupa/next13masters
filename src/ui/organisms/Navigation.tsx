import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav>
			<ul className="flex h-12 items-center text-sm text-zinc-950">
				<li className="pr-4">
					<ActiveLink href={"/"} exact>
						Home
					</ActiveLink>
				</li>
				<li className="pr-4">
					<ActiveLink href={"/products/1"} exact>
						All
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
