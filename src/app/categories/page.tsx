import { type Metadata } from "next";
import NextLink from "next/link";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: `Category Page`,
		description: `Category Page`,
	};
};

export default function CategoriesPage() {
	return (
		<>
			<article className="flex">
				<div className="">
					<ul className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						<li className="h-96 w-64 rounded-lg border-2 border-zinc-300 text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105 sm:h-64">
							<NextLink
								className="flex h-full w-full items-center justify-center"
								href="/categories/t-shirts"
							>
								T-Shirts
							</NextLink>
						</li>
						<li className="h-96 w-64 rounded-lg border-2 border-zinc-300 text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105 sm:h-64">
							<NextLink
								className="flex h-full w-full items-center justify-center"
								href="/categories/hoodies"
							>
								T-Hoodies
							</NextLink>
						</li>
						<li className="h-96 w-64 rounded-lg border-2 border-zinc-300 text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105 sm:h-64">
							<NextLink
								className="flex h-full w-full items-center justify-center"
								href="/categories/accessories"
							>
								Accessories
							</NextLink>
						</li>
					</ul>
				</div>
			</article>
		</>
	);
}
