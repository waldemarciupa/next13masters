"use client";

import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

type ActiveLinkProps<T extends string> = {
	children: React.ReactNode;
	href: Route<T> | URL | { pathname: Route<T> };
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname?.startsWith(href as string);

	return (
		<Link
			href={href as Route}
			className={clsx(
				"whitespace-nowrap hover:text-zinc-400",
				isActive && "border-b border-b-black hover:border-b-zinc-400",
			)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
