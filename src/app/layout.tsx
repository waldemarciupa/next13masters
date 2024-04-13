import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import { Navigation } from "@/ui/organisms/Navigation";
import { Footer } from "@/ui/organisms/Footer";
import { Toaster } from "@/ui/atoms/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next 13 Masters",
	description: "Next 13 Masters is a Next.js 13 workshop app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, "flex min-h-screen flex-col")}>
				<ClerkProvider>
					<Navigation />
					<main className="flex-grow">{children}</main>
					<Toaster />
					<Footer />
				</ClerkProvider>
			</body>
		</html>
	);
}
