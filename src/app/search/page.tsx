import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProductsSearchBySearch } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";
import { Spinner } from "@/components/atoms/Spinner";

export default async function SearchQueryPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] };
}) {
	if (!searchParams.query) {
		return notFound();
	}
	const searchQuery = searchParams.query.toString();

	const products = await getProductsSearchBySearch(searchQuery);
	if (!products || products.data.length === 0) {
		return <p className="text-lg ">Not products found</p>;
	}
	return (
		<>
			<article>
				<Suspense fallback={<Spinner />}>
					<div>
						<ProductList products={products.data} />
					</div>
				</Suspense>
			</article>
		</>
	);
}
