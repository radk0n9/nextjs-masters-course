"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			className="mt-2 rounded-lg bg-zinc-300 p-2 shadow-lg brightness-90 transition-transform duration-200 hover:scale-95 hover:brightness-100 disabled:cursor-wait disabled:bg-zinc-500"
			type="submit"
			disabled={formStatus.pending}
		>
			{formStatus.pending ? `Processing...` : "Add to cart"}
		</button>
	);
};
