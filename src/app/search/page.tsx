import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProductsSearchBySearch } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism/ProductList";
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
		<p className="text-lg ">Found 0 items for phrase {searchQuery}</p>;
	}

	return (
		<>
			<article>
				{products ? (
					<p className="mb-5 text-lg ">
						Found {products.data.length} items for phrase {searchQuery}
					</p>
				) : (
					""
				)}
				<Suspense fallback={<Spinner />}>
					<div>
						<ProductList products={products.data} />
					</div>
				</Suspense>
			</article>
		</>
	);
}
