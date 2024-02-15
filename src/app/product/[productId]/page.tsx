import { getProductsById } from "@/api/prodcuts";
import { SingleProductPage } from "@/components/oragnism /SingleProductPage";

export default async function SingleProductIdPage({ params }: { params: { productId: string } }) {
	const product = await getProductsById(params.productId);
	return (
		<div>
			<SingleProductPage product={product} />
		</div>
	);
}
