import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Example e-commerce project",
	description: "Project created for the course NEXT.JS MASTERS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="bg-zinc-200">
					<ul className="mx-auto flex justify-center gap-2  p-1 text-lg font-semibold sm:max-w-2xl md:max-w-6xl lg:max-w-7xl lg:text-xl">
						<li className="my-2">
							<ActiveLink href={"/"}>Home</ActiveLink>
						</li>
						<li className="my-2">
							<ActiveLink href={"/products"}>All</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md rounded-md bg-zinc-100 p-14 sm:max-w-2xl sm:py-16 md:max-w-6xl lg:max-w-7xl">
					{children}
				</section>
				<SpeedInsights />
				<footer className="my-3 flex justify-center gap-2 text-center text-sm text-gray-500">
					<p>© 2024</p>
					<a
						href="https://www.linkedin.com/in/konrad-pawelec/"
						className="font-semibold transition-transform duration-200 hover:scale-105"
					>
						Konrad Pawelec
					</a>
				</footer>
			</body>
		</html>
	);
}
