import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

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
			<div>
				<Link className="flex gap-2" href={"/cart"}>
					<ShoppingBag size={24} />
					<span>0</span>
				</Link>
			</div>
		</div>
	);
};
