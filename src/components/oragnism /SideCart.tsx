import { getOrCreateCart } from "@/api/cart";
import { CartLink } from "@/components/atoms/CartLink";
import { Overlay } from "@/components/atoms/Overlay";

export const SideCart = async () => {
	const cart = await getOrCreateCart();

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-md bg-white shadow-lg">
				<CartLink />
				<ul className="mx-4 mt-16 ">
					{cart.cartFindOrCreate.items.map((item) => (
						<li key={item.product.id}>{item.product.name}</li>
					))}
				</ul>
			</div>
		</>
	);
};
