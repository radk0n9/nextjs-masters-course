"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { revalidateTag } from "next/cache";
import { getOrCreateCart } from "@/api/cart";
import { excecuteGraphQL } from "@/api/graphqlApi";
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeProductCardQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
): Promise<void> => {
	await excecuteGraphQL({
		query: CartSetProductQuantityDocument,
		variables: {
			productId: productId,
			quantity: quantity,
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");
};

export const removeProductCart = async (cartId: string, productId: string) => {
	return excecuteGraphQL({
		query: CartRemoveProductDocument,
		variables: { cartId: cartId, productId: productId },
		next: { tags: ["cart"] },
		cache: "no-store",
	});
};

export async function handlePaymentAction() {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}
	const cart = await getOrCreateCart();

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "paypal"],
		metadata: {
			cartId: cart.cartFindOrCreate.id,
		},
		line_items: cart.cartFindOrCreate.items.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product.name,
					images: [item.product.images[0]?.url ?? ""],
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: "https://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "https://localhost:3000/cart/cancel",
	});
	if (!checkoutSession.url) {
		throw new Error("Something went wrong");
	}
	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
