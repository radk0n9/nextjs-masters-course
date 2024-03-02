import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductsByCollection } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism/ProductList";
import { Spinner } from "@/components/atoms/Spinner";

export const generateMetadata = async ({
	params,
}: {
	params: { collectionName: string };
}): Promise<Metadata> => {
	const collection = await getProductsByCollection(params.collectionName);
	return {
		title: collection?.name,
		description: collection?.description,
	};
};

export default async function CollectionsPage({ params }: { params: { collectionName: string } }) {
	const collection = await getProductsByCollection(params.collectionName);
	if (!collection) {
		throw new Error("Colletion not found");
	}
	return (
		<>
			<article>
				<div>
					<div className="mb-8">
						<h1 className="text-3xl font-bold">{collection.name}</h1>
						<p className="text-sm">{collection.description}</p>
					</div>
					<Suspense fallback={<Spinner />}>
						<ProductList products={collection.products} />
					</Suspense>
				</div>
			</article>
		</>
	);
}
