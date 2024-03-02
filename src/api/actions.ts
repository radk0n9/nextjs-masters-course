"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { revalidateTag } from "next/cache";
import {
	changeProductCardQuantity,
	getCartComplete,
	getOrCreateCart,
	removeProductCart,
} from "@/api/cart";
import { addProductReview } from "@/api/prodcuts";

export const changeProductCardQuantityAction = async (
	cartId: string,
	productId: string,
	quantity: number,
): Promise<void> => {
	await changeProductCardQuantity(cartId, productId, quantity);
	revalidateTag("cart");
};

export const removeProductCartAction = async (cartIt: string, productId: string) => {
	await removeProductCart(cartIt, productId);
	revalidateTag("cart");
};

export const addProductReviewAction = async (formData: FormData) => {
	await addProductReview(formData);
	revalidateTag("review");
};

export const getCartCompleteAction = async (cartId: string) => {
	await getCartComplete(cartId);
	//revalidateTag("cart");
};

export async function handlePaymentAction() {
	const headersList = headers();
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
		success_url: `${headersList.get("origin")}/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
		cancel_url: `${headersList.get("origin")}/cart/cancel`,
	});
	if (!checkoutSession.url) {
		throw new Error("Something went wrong");
	}
	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
