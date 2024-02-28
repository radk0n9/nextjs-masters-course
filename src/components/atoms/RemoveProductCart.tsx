"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { removeProductCart } from "@/app/cart/actions";

export const RemoveProductCart = ({ cartId, productId }: { cartId: string; productId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<>
			<button
				className="text-red-900 transition-colors duration-300 hover:text-red-500 disabled:cursor-wait disabled:text-gray-400"
				disabled={isPending}
				onClick={() => {
					startTransition(async () => {
						await removeProductCart(cartId, productId);
						router.refresh();
					});
				}}
			>
				<Trash2 />
			</button>
		</>
	);
};
