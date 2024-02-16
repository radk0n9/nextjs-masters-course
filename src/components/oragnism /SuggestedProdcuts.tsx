import { getProductsList } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";

//const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	const products = await getProductsList();
	//await sleep(4000);
	return (
		<>
			<div className="mt-7">
				<ProductList products={products.slice(0, 4)} />
			</div>
		</>
	);
};
