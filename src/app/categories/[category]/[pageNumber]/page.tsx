import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductList } from "@/components/oragnism /ProductList";
import { getProdcutsByCategoryBySlug } from "@/api/prodcuts";
import { Spinner } from "@/components/atoms/Spinner";

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProdcutsByCategoryBySlug(params.category);
	if (!products) {
		throw notFound();
	}

	return (
		<>
			<div className="pb-5">
				<h1 className="text-3xl font-semibold ">{products.name}</h1>
				<p className="text-sm">{products.description}</p>
			</div>
			<div>
				<Suspense fallback={<Spinner />}>
					<ProductList products={products.products} />
				</Suspense>
			</div>
			<div>{/* <ProductsPagination/> */}</div>
		</>
	);
}
