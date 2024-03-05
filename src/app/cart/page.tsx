import { redirect } from "next/navigation";
import { getOrCreateCart } from "@/api/cart";
import { handlePaymentAction } from "@/api/actions";
import { ShoppingCartItem } from "@/components/molecules/ShoppingCartItem";
import { OrderSummary } from "@/components/atoms/OrderSummary";
import { PayButton } from "@/components/atoms/PayButton";

export default async function CartPage() {
	const cart = await getOrCreateCart();

	if (cart.cartFindOrCreate.items.length === 0) {
		redirect("/");
	}
	const totalPrice = cart.cartFindOrCreate.items.reduce(
		(total, item) => total + item.product.price * item.quantity,
		0,
	);
	return (
		<>
			<div className="w-full">
				<h1 className="text-2xl font-bold uppercase">Shopping Cart</h1>
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
					<section className="w-full md:w-1/3">
						<div className="flex flex-col rounded-md bg-zinc-50 p-5">
							<OrderSummary totalPrice={totalPrice} />
							<form action={handlePaymentAction}>
								<PayButton />
							</form>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
