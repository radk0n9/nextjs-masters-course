import { getProductsList } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";

export default async function ProdcutsPage() {
	const products = await getProductsList(10);

	return (
		<>
			<h2 className="sr-only">Products</h2>
			<ProductList products={products} />
		</>
	);
}
