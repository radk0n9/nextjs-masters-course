import Link from "next/link";
import { ProductItemsDescription } from "@/components/atoms/ProdcutItemDescription";
import { ProducItemsImages } from "@/components/atoms/ProductItemsImage";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductItemListProps = {
	product: ProductsListItemFragment;
};

export const ProductItemList = ({ product }: ProductItemListProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && <ProducItemsImages src={product.images[0].url} alt={product.id} />}
					<ProductItemsDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
