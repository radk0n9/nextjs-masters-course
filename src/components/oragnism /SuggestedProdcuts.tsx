import { getProductsSuggestedBySlug } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";

//const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async ({ slug }: { slug: string }) => {
	const products = await getProductsSuggestedBySlug(slug);
	if (!products) {
		throw new Error("No products found");
	}
	return (
		<>
			<div className="mt-7" data-testid="related-products">
				<h2 className="mb-2 text-2xl font-semibold">Related products</h2>
				<ProductList products={products.slice(0, 4)} />
			</div>
		</>
	);
};
