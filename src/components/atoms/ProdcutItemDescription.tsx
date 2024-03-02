import { formatPrice } from "@/utils/utils";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductItemsDescriptionProps = {
	product: ProductsListItemFragment;
};

export const ProductItemsDescription = ({
	product: { name, categories, price },
}: ProductItemsDescriptionProps) => {
	return (
		<div className="mt-3 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold md:text-base">{name}</h3>
				<p className="text-sm md:text-base">{categories[0] && <span>{categories[0].name}</span>}</p>
			</div>
			<p className="text-sm font-semibold md:text-base" data-testid="product-price">
				<span>{formatPrice(price / 100)}</span>
			</p>
		</div>
	);
};
