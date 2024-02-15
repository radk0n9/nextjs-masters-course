import Link from "next/link";
import { ProductItemsDescription } from "@/components/atoms/ProdcutItemDescription";
import { ProducItemsImages } from "@/components/atoms/ProductItemsImage";
import { type ProductItemType } from "@/components/type";

type ProductItemListProps = {
	product: ProductItemType;
};

export const ProductItemList = ({ product }: ProductItemListProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProducItemsImages src={product.itemImage.src} alt={product.itemImage.alt} />
					<ProductItemsDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
