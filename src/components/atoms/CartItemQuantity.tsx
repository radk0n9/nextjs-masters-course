"use client";

import { useState } from "react";
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
	const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);

	return (
		<form>
			<article className="flex items-center justify-center">
				<button
					type="submit"
					className="my-1 ml-2 h-7 w-7 rounded-lg bg-zinc-300 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-wait disabled:bg-zinc-500"
					formAction={async () => {
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
				<div>{optimisticQuantity}</div>
				<div>
					<button
						type="submit"
						className="my-1 ml-2 h-7 w-7 rounded-lg bg-zinc-300 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-wait disabled:bg-zinc-500"
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
			</article>
		</form>
	);
};
