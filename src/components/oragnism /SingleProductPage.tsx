import { type ProductItemType } from "@/components/type";
import { formatPrice } from "@/components/utils";

type ProductItemListProps = {
	product: ProductItemType;
};

export const SingleProductPage = ({ product }: ProductItemListProps) => {
	return (
		<div className="flex justify-center gap-5 ">
			<div>
				<img src={product.itemImage.src} alt={product.itemImage.alt} width={350} height={350} />
			</div>
			<div className="text-right">
				<h1 className="text-2xl font-semibold md:text-4xl">{product.name}</h1>
				<p className="my-2 text-lg">Category: {product.category}</p>
				<p className="md:4xl my-2 text-2xl font-semibold">
					<span>Price: {formatPrice(product.price / 100)}</span>
				</p>
				<button className="rounded-lg bg-zinc-300 p-2 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100">
					Add to card
				</button>
			</div>
		</div>
	);
};
