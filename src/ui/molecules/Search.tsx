"use client";
import { Search as LucideSearch } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const Search = () => {
	const router = useRouter();
	const [searchParams] = useSearchParams();
	const [searchQuery, setSearchQuery] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	useEffect(() => {
		if (searchQuery) {
			const timer = setTimeout(() => {
				router.push(`/search?query=${searchQuery}`);
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [router, searchParams, searchQuery]);

	return (
		<div>
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
					<LucideSearch width={20} height={20} />
				</div>
				<input
					type="search"
					name="search"
					placeholder="Search"
					className="w-10 min-w-[10rem] rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:w-full sm:min-w-full"
					value={searchQuery}
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
};
