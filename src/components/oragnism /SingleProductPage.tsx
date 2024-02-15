import { type ProductItemType } from "@/components/type";
import { formatPrice } from "@/components/utils";

type ProductItemListProps = {
	product: ProductItemType;
};

export const SingleProductPage = ({ product }: ProductItemListProps) => {
	return (
		<div className="flex justify-center gap-2 ">
			<div>
				<h1 className="text-2xl font-semibold md:text-4xl">{product.name}</h1>
				<p className="my-2 text-lg">Category: {product.category}</p>
				<p className="md:4xl my-2 text-2xl font-semibold">
					<span>Price: {formatPrice(product.price / 100)}</span>
				</p>
			</div>
			<div>
				<img src={product.itemImage.src} alt={product.itemImage.alt} width={350} height={350} />
			</div>
		</div>
	);
};
