import { Suspense } from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsPaginatedList } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism/ProductList";
import { Spinner } from "@/components/atoms/Spinner";
import { ProductsPagination } from "@/components/molecules/ProductsPagination";
import { ProductsHeader } from "@/components/molecules/ProductsHeader";
import { type ProductSortBy } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: { pageNumber: string };
}): Promise<Metadata> => {
	return {
		title: `Prodcuts Page ${params.pageNumber}`,
		description: `Prodcuts Page ${params.pageNumber}`,
	};
};

// export const generateStaticParams = async () => {
// 	const products = await getProductsPaginatedList(20, 0);
// 	const numberPages = Math.round(products.meta.total / 8);
// 	return Array.from({ length: numberPages }).map((_, index) => ({
// 		pageNumber: [String(index + 1)],
// 	}));
// };

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string[] };
	searchParams: { sort?: string };
}) {
	const currentPage = Number(params.pageNumber[0]);

	const products = await getProductsPaginatedList(
		8,
		(Number(currentPage) - 1) * 8,
		searchParams.sort
			? {
					orderBy: searchParams.sort
						.toUpperCase()
						.replace("ASC", "")
						.replace("DESC", "") as ProductSortBy,
					order: searchParams.sort?.toUpperCase().includes("ASC") ? "ASC" : "DESC",
				}
			: { orderBy: "DEFAULT", order: "DESC" },
	);
	const numberPages = Math.round(products.meta.total / 8);

	if (params.pageNumber.length >= 2) {
		return notFound();
	}
	return (
		<>
			<article>
				<div>
					<ProductsHeader pageNumber={params.pageNumber} />
					<h2 className="sr-only">Products</h2>
					<Suspense fallback={<Spinner />}>
						<ProductList products={products.data} />
					</Suspense>
				</div>
				<div>
					<ProductsPagination
						numberPages={numberPages}
						currentPage={currentPage}
						url={`/products`}
					/>
				</div>
			</article>
		</>
	);
}
