import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { type Route } from "next";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Search } from "@/ui/molecules/Search";
import { getCartByCookieId } from "@/api/cart";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "All" },
	{ href: "/categories/t-shirts", label: "T-shirts" },
	{ href: "/categories/hoodies", label: "Hoodies" },
	{ href: "/categories/accessories", label: "Accessories" },
];

export const Navigation = async () => {
	const cart = await getCartByCookieId();
	const quantity = cart?.orderItems.length || 0;
	return (
		<header className="mx-auto flex h-20 w-full items-center justify-between overflow-x-scroll px-4 sm:h-16 sm:overflow-x-auto sm:px-8">
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
						<span className="ml-2 text-sm font-medium ">{quantity}</span>
					</div>
				</Link>
				<SignedIn>
					<UserButton userProfileMode="navigation" />
				</SignedIn>
				<SignedOut>
					<SignInButton />
				</SignedOut>
			</div>
		</header>
	);
};
