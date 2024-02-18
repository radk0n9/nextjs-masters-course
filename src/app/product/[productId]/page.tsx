import { type Metadata } from "next";
import { getProductsById, getProductsListStatic } from "@/api/prodcuts";
import { SingleProductPage } from "@/components/oragnism /SingleProductPage";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductsById(params.productId);
	return {
		title: product.name,
		description: product.description,
	};
};

export const generateStaticParams = async () => {
	const products = await getProductsListStatic();
	return products.map((product) => ({
		productId: product.id,
	}));
};

export default async function SingleProductIdPage({ params }: { params: { productId: string } }) {
	const product = await getProductsById(params.productId);
	return (
		<div>
			<SingleProductPage product={product} />
		</div>
	);
}
