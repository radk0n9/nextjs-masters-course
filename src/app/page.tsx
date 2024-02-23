import { getProductsList } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";

export default async function HomePage() {
	const products = await getProductsList(8);

	return (
		<div>
			<ProductList products={products} />
		</div>
	);
}
