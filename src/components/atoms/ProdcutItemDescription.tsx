import { StarIcon } from "lucide-react";
import { formatPrice } from "@/utils/utils";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductItemsDescriptionProps = {
	product: ProductsListItemFragment;
};

export const ProductItemsDescription = ({
	product: { name, categories, price, rating },
}: ProductItemsDescriptionProps) => {
	return (
		<>
			<div className="mt-2 flex justify-between">
				<div>
					<h3 className="text-sm font-semibold ">{name}</h3>
					<p className="text-sm">{categories[0] && <span>{categories[0].name}</span>}</p>
				</div>
				<div>
					<p className="text-sm font-semibold" data-testid="product-price">
						<span>{formatPrice(price / 100)}</span>
					</p>
					<p data-testid="product-rating" className="flex items-center justify-center text-sm">
						<span>{(rating as number).toFixed(2)}</span>
						<span>/5</span>
						<StarIcon color="gold" />
					</p>
				</div>
			</div>
		</>
	);
};
