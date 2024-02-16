import { getProdcutsByPage } from "@/api/prodcuts";
import { ProductList } from "@/components/oragnism /ProductList";

export function generateStaticParams() {
	return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }, { pageNumber: "4" }];
}

export default async function ProductsPageNumber({ params }: { params: { pageNumber: string } }) {
	const offset = (parseInt(params.pageNumber) - 1) * 20;
	const products = await getProdcutsByPage(offset.toString());
	return (
		<div>
			<h1 className="mb-5 text-center text-2xl font-semibold">Strona {params.pageNumber}</h1>
			<ProductList products={products} />
		</div>
	);
}
