import { redirect } from "next/navigation";
import { getOrCreateCart } from "@/api/cart";
import { formatPrice } from "@/utils/utils";
import { CartItemQuantity } from "@/components/atoms/CartItemQuantity";
import { RemoveProductCart } from "@/components/atoms/RemoveProductCart";
import { handlePaymentAction } from "@/app/cart/actions";

export default async function CartPage() {
	const cart = await getOrCreateCart();

	if (!cart) {
		redirect("/");
	}

	return (
		<>
			{/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
			<div>
				<table className="table-fixed">
					<thead className="">
						<tr className="table-row">
							<th className="px-7">Product</th>
							<th className="px-7">Category</th>
							<th className="px-7">Quantity</th>
							<th className="px-7">Price</th>
						</tr>
					</thead>
					<tbody className="table-row-group text-center">
						{cart.cartFindOrCreate.items.map(
							(item) =>
								item.product && (
									<tr key={item.product.id}>
										<td>{item.product.name}</td>
										{item.product.categories[0] && <td>{item.product.categories[0].name}</td>}
										<td className="text-center">
											<CartItemQuantity
												quantity={item.quantity}
												cartId={cart.cartFindOrCreate.id}
												productId={item.product.id}
											/>
										</td>
										<td>{formatPrice(item.product.price / 100)}</td>
										{cart.cartFindOrCreate.items[0]?.product && (
											<RemoveProductCart
												cartId={cart.cartFindOrCreate.id}
												productId={cart.cartFindOrCreate.items[0]?.product.id}
											/>
										)}
									</tr>
								),
						)}
					</tbody>
				</table>
				<form action={handlePaymentAction}>
					<button
						type="submit"
						className="mt-4 w-full max-w-sm rounded-md border-4 border-transparent bg-purple-500 py-2 font-bold text-white transition-colors hover:border-4 hover:border-purple-900 hover:bg-purple-600"
					>
						Pay
					</button>
				</form>
			</div>
		</>
	);
}
