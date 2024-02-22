import { notFound } from "next/navigation";
import { ProductList } from "@/components/oragnism /ProductList";
import { getProdcutsByCategoryBySlug } from "@/api/prodcuts";

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
		<div>
			<h1>
				Product from category {params.category} on page {params.pageNumber}
			</h1>
			<ProductList products={products} />
		</div>
	);
}
