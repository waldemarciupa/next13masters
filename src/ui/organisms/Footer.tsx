import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-gray-100 px-8">
			<div className="container mx-auto py-8 ">
				<h2 className="text-center text-xs leading-7 text-slate-500">
					&copy; 2024 Demo{" "}
					<Link className="underline hover:text-slate-900" href="http://www.nextjsmasters.pl">
						nextjsmasters.pl
					</Link>
				</h2>
			</div>
		</footer>
	);
};
