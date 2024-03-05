import { getOrCreateCart } from "@/api/cart";
import { ModalCart } from "@/components/molecules/ModalCart";
import { Overlay } from "@/components/atoms/Overlay";

export const SideCart = async () => {
	const cart = await getOrCreateCart();

	if (cart.cartFindOrCreate.items.length === 0) {
		return null;
	}

	return (
		<>
			<aside className="absolute inset-0 z-50 backdrop-blur-sm">
				<Overlay />
				<div className="absolute bottom-0 right-0 top-0 z-50 flex h-full max-w-md animate-slideRight flex-col bg-white p-5 shadow-lg sm:w-1/3 lg:w-2/3">
					<ModalCart cart={cart} />
				</div>
			</aside>
		</>
	);
};
