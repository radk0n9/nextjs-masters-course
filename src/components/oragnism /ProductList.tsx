import { ProductItemList } from "@/components/molecules/ProductItemList";
import { type ProductItemType } from "@/components/type";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductItemList key={product.id} product={product} />;
			})}
		</ul>
	);
};
