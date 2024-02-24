import { Suspense } from "react";
import { getProductsByCollection } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";
import { Spinner } from "@/components/atoms/Spinner";
export default async function CollectionsPage({ params }: { params: { collectionName: string } }) {
	const collection = await getProductsByCollection(params.collectionName);
	if (!collection) {
		throw new Error("Colletion not found");
	}
	return (
		<div>
			<div className="mb-8">
				<h1 className="text-3xl font-bold">{collection.name}</h1>
				<p className="text-sm">{collection.description}</p>
			</div>
			<Suspense fallback={<Spinner />}>
				<ProductList products={collection.products} />
			</Suspense>
		</div>
	);
}
