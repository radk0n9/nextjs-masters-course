import NextLink from "next/link";

export const CollectionList = () => {
	return (
		<ul className="mb-8 grid grid-cols-1 gap-5 border-b pb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<li className="h-20 rounded-lg border-2 border-zinc-300 text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105">
				<NextLink
					className="flex h-full w-full items-center justify-center"
					href="/collections/summer-vibes"
				>
					Summer Vibes
				</NextLink>
			</li>
			<li className="h-20 rounded-lg border-2 border-zinc-300 text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105">
				<NextLink
					className="flex h-full w-full items-center justify-center"
					href="/collections/new-arrivals"
				>
					New Arrivals
				</NextLink>
			</li>
			<li className="h-20 rounded-lg border-2 border-zinc-300 text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105">
				<NextLink
					className="flex h-full w-full items-center justify-center"
					href="/collections/elegant-extras"
				>
					Elegant Extras
				</NextLink>
			</li>
		</ul>
	);
};
