import { ProductItemList } from "@/components/atoms/ProductItemList";
import { type ProductsListItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: ProductsListItemFragment[] }) => {
	return (
		<>
			<ul
				className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => {
					return <ProductItemList key={product.id} product={product} />;
				})}
			</ul>
		</>
	);
};
