import { cookies } from "next/headers";
import { excecuteGraphQL } from "@/api/graphqlApi";
import {
	CartAddProductDocument,
	CartFindOrCreateDocument,
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
} from "@/gql/graphql";

export async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId === undefined) {
		return findCardOrCreate("");
	} else {
		return findCardOrCreate(cartId);
	}
}

export async function findCardOrCreate(cartId: string) {
	return excecuteGraphQL({
		query: CartFindOrCreateDocument,
		variables: { id: cartId },
		next: { tags: ["cart"] },
		cache: "no-store",
	});
}

export function addProductToCard(cardId: string, productId: string) {
	return excecuteGraphQL({
		query: CartAddProductDocument,
		variables: { id: cardId, productId: productId },
		cache: "no-store",
	});
}

export function removeProductCart(cartId: string, productId: string) {
	return excecuteGraphQL({
		query: CartRemoveProductDocument,
		variables: { cartId: cartId, productId: productId },
	});
}

export async function changeProductCardQuantity(
	cartId: string,
	productId: string,
	quantity: number,
) {
	return excecuteGraphQL({
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
}
