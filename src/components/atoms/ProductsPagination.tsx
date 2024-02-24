import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import NextLink from "next/link";
import { ActiveLink } from "@/components/atoms/ActiveLink";

export const ProductsPagination = async ({
	numberPages,
	currentPage,
}: {
	numberPages: number;
	currentPage: number;
}) => {
	return (
		<>
			<article aria-label="pagination" className="mx-auto mt-5 w-fit rounded-lg bg-zinc-200">
				<ul className="mx-auto flex justify-center gap-1 p-2 text-lg font-semibold">
					<li>
						<NextLink
							href={currentPage == 1 ? `/products/1` : `/products/${currentPage - 1} `}
							className="flex h-full items-center border-b-2 border-transparent px-2 py-2 hover:border-zinc-300"
						>
							<ArrowBigLeft />
						</NextLink>
					</li>
					{Array.from({ length: numberPages }).map((_, index) => (
						<li key={index}>
							<ActiveLink exact={true} href={`/products/${index + 1}`}>
								{index + 1}
							</ActiveLink>
						</li>
					))}
					<li>
						<NextLink
							href={
								currentPage == numberPages
									? `/products/${numberPages}`
									: `/products/${currentPage + 1}`
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
