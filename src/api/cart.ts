import { cookies } from "next/headers";
import { excecuteGraphQL } from "@/api/graphqlApi";
import { CartAddProductDocument, CartFindOrCreateDocument } from "@/gql/graphql";

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
