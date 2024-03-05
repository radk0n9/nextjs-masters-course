import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductsById } from "@/api/prodcuts";
import { Spinner } from "@/components/atoms/Spinner";
import { SingleProductPage } from "@/components/oragnism/SingleProductPage";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductsById(params.productId);
	return {
		title: product.product?.name,
		description: product.product?.description,
	};
};

// export const generateStaticParams = async () => {
// 	const products = await getProductsList(20);
// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export default async function SingleProductIdPage({ params }: { params: { productId: string } }) {
	const product = await getProductsById(params.productId);
	if (!product.product) {
		throw notFound();
	}

	return (
		<article>
			<Suspense fallback={<Spinner />}>
				<SingleProductPage productId={product.product.id} />
			</Suspense>
		</article>
	);
}
