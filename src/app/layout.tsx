import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/oragnism/Navbar";
import { Footer } from "@/components/oragnism/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),
	title: "Example e-commerce project",
	description: "Project created for the course NEXT.JS MASTERS",
};

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} flex min-h-screen flex-col font-sans`}>
					<Navbar />
					<main className="mx-auto flex max-w-md flex-grow flex-col p-12 sm:max-w-2xl sm:py-10 md:max-w-6xl lg:max-w-7xl">
						{children}
					</main>
					<SpeedInsights />
					<Footer />
					{modal}
				</body>
			</html>
		</ClerkProvider>
	);
}
