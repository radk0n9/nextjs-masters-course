import { MoveRight } from "lucide-react";
import { type CartFindOrCreateMutation } from "@/gql/graphql";
import { ShoppingCartItem } from "@/components/atoms/ShoppingCartItem";

export const ModalCart = async ({ cart }: { cart: CartFindOrCreateMutation }) => {
	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Shopping Cart</h1>
				<a
					href="/cart"
					className="flex text-purple-500 transition-all duration-300 hover:scale-105 hover:text-purple-700"
				>
					View Cart <MoveRight />
				</a>
			</div>
			<div className="flex">
				<ul className="mx-4 mt-10">
					{cart.cartFindOrCreate.items.map((item) => (
						<ShoppingCartItem
							key={item.product.id}
							item={[item]}
							cartId={cart.cartFindOrCreate.id}
							isModal
						/>
					))}
				</ul>
			</div>
		</>
	);
};
