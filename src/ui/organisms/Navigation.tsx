import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="flex h-16 items-center justify-between">
			<ul className="flex text-zinc-950">
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
			<div>
				<Link className="flex gap-2" href={"/cart"} exact>
					<ShoppingBag size={24} />
					<span>0</span>
				</Link>
			</div>
		</nav>
	);
};
