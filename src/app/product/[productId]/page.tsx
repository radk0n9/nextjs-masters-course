import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductsById } from "@/api/prodcuts";
import { SingleProductPage } from "@/components/oragnism /SingleProductPage";
import { SuggestedProductsList } from "@/components/oragnism /SuggestedProdcuts";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductsById(params.productId);
	return {
		title: `${product.name}`,
		description: `${product.description}`,
	};
};

export default async function SingleProductIdPage({ params }: { params: { productId: string } }) {
	const product = await getProductsById(params.productId);
	return (
		<div>
			<SingleProductPage product={product} />
			<aside>
				<Suspense fallback="Loading...">
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</div>
	);
}
