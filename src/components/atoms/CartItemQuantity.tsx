"use client";

import { useOptimistic } from "react";
import { changeProductCardQuantity } from "@/app/cart/actions";

export const CartItemQuantity = ({
	cartId,
	productId,
	quantity,
}: {
	cartId: string;
	productId: string;
	quantity: number;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQunatity: number) => newQunatity,
	);

	return (
		<form className="flex items-center justify-center gap-2">
			<div className="flex items-center">
				<button
					type="submit"
					className="h-8 w-8 rounded-full bg-zinc-300 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-wait disabled:bg-zinc-500"
					formAction={async () => {
						if (optimisticQuantity === 0) {
							return;
						}
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeProductCardQuantity(
							(cartId = cartId),
							(productId = productId),
							(quantity = optimisticQuantity - 1),
						);
					}}
				>
					-
				</button>
			</div>
			<div className="mx-2">{optimisticQuantity}</div>
			<div className="flex items-center">
				<button
					type="submit"
					className="h-8 w-8 rounded-full bg-zinc-300 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-wait disabled:bg-zinc-500"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity + 1);
						await changeProductCardQuantity(
							(cartId = cartId),
							(productId = productId),
							(quantity = optimisticQuantity + 1),
						);
					}}
				>
					+
				</button>
			</div>
		</form>
	);
};
