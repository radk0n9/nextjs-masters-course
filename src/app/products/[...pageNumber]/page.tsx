import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductsPaginatedList } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";
import { Spinner } from "@/components/atoms/Spinner";
import { ProductsPagination } from "@/components/atoms/ProductsPagination";

export const generateStaticParams = async () => {
	const products = await getProductsPaginatedList(20, 0);
	const numberPages = Math.round(products.meta.total / 8);
	return Array.from({ length: numberPages }).map((_, index) => ({
		pageNumber: [String(index + 1)],
	}));
};

export default async function ProductsPage({ params }: { params: { pageNumber: string[] } }) {
	const currentPage = Number(params.pageNumber[0]);
	const products = await getProductsPaginatedList(8, (Number(currentPage) - 1) * 8);
	const numberPages = Math.round(products.meta.total / 8);

	if (params.pageNumber.length >= 2) {
		return notFound();
	}
	return (
		<>
			<div>
				<h1 className="mb-5 text-center text-2xl font-semibold">Page {params.pageNumber}</h1>
				<h2 className="sr-only">Products</h2>
				<Suspense fallback={<Spinner />}>
					<ProductList products={products.data} />
				</Suspense>
			</div>
			<div>
				<ProductsPagination numberPages={numberPages} currentPage={currentPage} />
			</div>
		</>
	);
}
