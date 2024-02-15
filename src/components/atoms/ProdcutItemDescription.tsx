import { type ProductItemType } from "@/components/type";
import { formatPrice } from "@/components/utils";

type ProductItemsDescriptionProps = {
	product: ProductItemType;
};

export const ProductItemsDescription = ({
	product: { name, category, price },
}: ProductItemsDescriptionProps) => {
	return (
		<div className="mt-3 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold md:text-base">{name}</h3>
				<p className="text-sm md:text-base">
					<span>{category}</span>
				</p>
			</div>
			<p className="text-sm font-semibold md:text-base">
				<span>{formatPrice(price / 100)}</span>
			</p>
		</div>
	);
};
