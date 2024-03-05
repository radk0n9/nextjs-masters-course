import NextLink from "next/link";

export const CollectionList = () => {
	return (
		<div className="mx-auto pb-8">
			<div className="mx-auto mb-5 ">
				<ul className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<li className="h-80 rounded-lg border-2 border-zinc-300 bg-white text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105 sm:h-64">
						<NextLink
							className="flex h-full w-full items-center justify-center"
							href="/collections/summer-vibes"
						>
							Summer Vibes
						</NextLink>
					</li>
					<li className="h-80 rounded-lg border-2 border-zinc-300 bg-white text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105 sm:h-64">
						<NextLink
							className="flex h-full w-full items-center justify-center"
							href="/collections/new-arrivals"
						>
							New Arrivals
						</NextLink>
					</li>
					<li className="h-80 rounded-lg border-2 border-zinc-300 bg-white text-center shadow-md transition-transform duration-200 ease-in-out hover:scale-105 sm:h-64">
						<NextLink
							className="flex h-full w-full items-center justify-center"
							href="/collections/elegant-extras"
						>
							Elegant Extras
						</NextLink>
					</li>
				</ul>
			</div>
		</div>
	);
};
