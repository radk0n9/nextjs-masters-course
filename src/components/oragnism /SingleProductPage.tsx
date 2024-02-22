import { formatPrice } from "@/components/utils";
import { type ProdcutsByIdQuery } from "@/gql/graphql";

type ProductItemListProps = {
	product: ProdcutsByIdQuery;
};

export const SingleProductPage = ({ product }: ProductItemListProps) => {
	return (
		<div className="flex justify-center gap-5 ">
			<div>
				{product.product?.images[0] && (
					<img
						src={product.product.images[0].url}
						alt={product.product.images[0].alt}
						width={320}
						height={320}
					/>
				)}
			</div>
			<div className="mr-14 max-w-md text-left">
				<h1 className="text-xl font-bold tracking-tight md:text-2xl">{product.product?.name}</h1>
				{product.product?.categories[0]?.name && (
					<p className="text-xs">{product.product?.categories[0]?.name}</p>
				)}
				<p className="md:xl my-2 text-lg font-semibold">
					{product.product?.price && <span>{formatPrice(product.product?.price / 100)}</span>}
				</p>
				<button className="mt-2 rounded-lg bg-zinc-300 p-2 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100">
					Add to card
				</button>
				<p className="mt-4 text-sm tracking-tight">{product.product?.description}</p>
			</div>
		</div>
	);
};
