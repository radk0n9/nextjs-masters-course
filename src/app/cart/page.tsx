import { redirect } from "next/navigation";
import { getOrCreateCart } from "@/api/cart";
import { handlePaymentAction } from "@/app/cart/actions";
import { ShoppingCartItem } from "@/components/atoms/ShoppingCartItem";

export default async function CartPage() {
	const cart = await getOrCreateCart();

	if (cart.cartFindOrCreate.items.length === 0) {
		redirect("/");
	}

	return (
		<>
			<div className="w-full">
				<h1 className="text-4xl font-bold">Shopping Cart</h1>
				<div className="mt-10 flex flex-col gap-20 md:flex-row">
					<section className="w-full md:w-2/3">
						<ul>
							{cart.cartFindOrCreate.items.map((item) => (
								<ShoppingCartItem
									key={item.product.id}
									item={[item]}
									isModal={false}
									cartId={cart.cartFindOrCreate.id}
								/>
							))}
						</ul>
					</section>
				</div>
			</div>
			<form action={handlePaymentAction}>
				<button
					type="submit"
					className="mt-4 w-full max-w-sm rounded-md border-4 border-transparent bg-purple-500 py-2 font-bold text-white transition-colors hover:border-4 hover:border-purple-900 hover:bg-purple-600"
				>
					Pay
				</button>
			</form>
		</>
	);
}
