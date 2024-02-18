import { type ProductItemType } from "@/components/type";
import { formatPrice } from "@/components/utils";

type ProductItemListProps = {
	product: ProductItemType;
};

export const SingleProductPage = ({ product }: ProductItemListProps) => {
	return (
		<div className="flex justify-center gap-5 ">
			<div>
				<img src={product.itemImage.src} alt={product.itemImage.alt} width={450} height={450} />
			</div>
			<div className="mr-14 text-left">
				<h1 className="text-xl font-bold tracking-tight md:text-2xl">{product.name}</h1>
				<p className="text-xs">{product.category}</p>
				<p className="md:xl my-2 text-lg font-semibold">
					<span>{formatPrice(product.price / 100)}</span>
				</p>
				<button className="mt-2 rounded-lg bg-zinc-300 p-2 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100">
					Add to card
				</button>
				<p className="mt-4 text-sm tracking-tight">{product.description}</p>
			</div>
		</div>
	);
};
