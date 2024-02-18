import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Navigation } from "@/ui/organisms/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next 13 Masters",
	description: "Next 13 Masters is a Next.js 13 workshop app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ClerkProvider>
					<Navigation />
					{children}
				</ClerkProvider>
			</body>
		</html>
	);
}
