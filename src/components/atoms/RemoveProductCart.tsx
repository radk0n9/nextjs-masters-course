"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeProductCart } from "@/app/cart/actions";

export const RemoveProductCart = ({ cartId, productId }: { cartId: string; productId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<>
			<td>
				<button
					className="disabled:cursor-wait disabled:bg-zinc-500"
					disabled={isPending}
					onClick={() => {
						startTransition(async () => {
							await removeProductCart(cartId, productId);
							router.refresh();
						});
					}}
				>
					Remove
				</button>
			</td>
		</>
	);
};
