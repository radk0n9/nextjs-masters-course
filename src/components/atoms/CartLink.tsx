"use client";
//import { useRouter } from "next/navigation";

export const CartLink = () => {
	//const router = useRouter();
	return (
		<>
			<a href="/cart">Cart</a>
			{/* <button
				onClick={() => router.refresh()}
				type="button"
				className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-100"
				data-testid="cart-link"
			>
				Open Cart
			</button> */}
		</>
	);
};
