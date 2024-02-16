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
			<div className="text-left">
				<h1 className="text-xl font-semibold md:text-2xl">{product.name}</h1>
				<p className="text-sm">Category: {product.category}</p>
				<p className="md:2xl my-2 text-xl font-semibold">
					<span>Price: {formatPrice(product.price / 100)}</span>
				</p>
				<button className="mt-2 rounded-lg bg-zinc-300 p-2 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100">
					Add to card
				</button>
				<p className="mt-4 text-sm">{product.description}</p>
			</div>
		</div>
	);
};
