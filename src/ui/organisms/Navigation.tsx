import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Search } from "@/ui/molecules/Search";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "All" },
	{ href: "/categories/t-shirts", label: "T-shirts" },
	{ href: "/categories/hoodies", label: "Hoodies" },
	{ href: "/categories/accessories", label: "Accessories" },
];

export const Navigation = () => {
	return (
		<div className="container mx-auto flex h-16 items-center justify-between">
			<nav>
				<ul className="flex text-zinc-950">
					{navLinks.map(({ href, label }) => (
						<li key={href} className="pr-4">
							<ActiveLink href={href as Route} exact={label === "Home" && true}>
								{label}
							</ActiveLink>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex items-center gap-4 ">
				<Search />
				<Link className="flex  text-zinc-950" href={"/cart"}>
					<ShoppingBag size={24} />
					<div className="w-4">
						<span className="ml-2 text-sm font-medium ">0</span>
					</div>
				</Link>
			</div>
		</div>
	);
};
