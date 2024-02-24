import { Suspense } from "react";
import { getProductsList } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";
import { Spinner } from "@/components/atoms/Spinner";

export default async function HomePage() {
	const products = await getProductsList(4);

	return (
		<div>
			<Suspense fallback={<Spinner />}>
				<ProductList products={products} />
			</Suspense>
		</div>
	);
}
