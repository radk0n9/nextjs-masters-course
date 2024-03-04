"use client";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import NextLink from "next/link";
import { type Route } from "next";
import { useSearchParams } from "next/navigation";
import { ActiveLink } from "@/components/atoms/ActiveLink";

export const ProductsPagination = async ({
	numberPages,
	currentPage,
	url,
}: {
	numberPages: number;
	currentPage: number;
	url: Route;
}) => {
	const { get: getSearchParam } = useSearchParams();
	return (
		<>
			<article aria-label="pagination" className="mx-auto mt-5 w-fit rounded-lg bg-zinc-200">
				<ul className="mx-auto flex justify-center gap-1 p-2 text-lg font-semibold">
					<li>
						<NextLink
							href={
								currentPage == 1
									? (`${url}${getSearchParam("sort") ? `?sort=${getSearchParam("sort")}` : ""}` as Route)
									: (`${url}/${currentPage - 1}${getSearchParam("sort") ? `?sort=${getSearchParam("sort")}` : ""}` as Route)
							}
							className="flex h-full items-center border-b-2 border-transparent px-2 py-2 hover:border-zinc-300"
						>
							<ArrowBigLeft />
						</NextLink>
					</li>
					{Array.from({ length: numberPages }).map((_, index) => (
						<li key={index}>
							<ActiveLink
								exact={true}
								href={
									`${url}/${index + 1}${getSearchParam("sort") ? `?sort=${getSearchParam("sort")}` : ""}` as Route
								}
							>
								{index + 1}
							</ActiveLink>
						</li>
					))}
					<li>
						<NextLink
							href={
								currentPage == numberPages
									? (`${url}/${numberPages}${getSearchParam("sort") ? `?sort=${getSearchParam("sort")}` : ""}` as Route)
									: (`${url}/${currentPage + 1}${getSearchParam("sort") ? `?sort=${getSearchParam("sort")}` : ""}` as Route)
							}
							className="flex h-full items-center border-b-2 border-transparent px-2 py-2 hover:border-zinc-300"
						>
							<ArrowBigRight />
						</NextLink>
					</li>
				</ul>
			</article>
		</>
	);
};
