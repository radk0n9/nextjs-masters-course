import { Suspense } from "react";
import { getProductsList } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism/ProductList";
import { Spinner } from "@/components/atoms/Spinner";
import { CollectionList } from "@/components/oragnism/CollectionList";

export default async function HomePage() {
	const products = await getProductsList(4);

	return (
		<section>
			<Suspense fallback={<Spinner />}>
				<CollectionList />
			</Suspense>
			<Suspense fallback={<Spinner />}>
				<ProductList products={products} />
			</Suspense>
		</section>
	);
}
