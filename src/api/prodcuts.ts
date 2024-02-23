import { loadEnvConfig } from "@next/env";
import {
	ProdcutsByIdDocument,
	ProductsByCategoryBySlugDocument,
	ProductsByCollectionBySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { excecuteGraphQL } from "@/api/graphqlApi";
loadEnvConfig(process.cwd());

export const getProductsList = async (numberOfItems: number) => {
	const graphqlResponse = await excecuteGraphQL(ProductsGetListDocument, { take: numberOfItems });
	return graphqlResponse.products.data;
};

export const getProductsById = async (productId: string) => {
	const product = await excecuteGraphQL(ProdcutsByIdDocument, { id: productId });
	return product;
};

export const getProdcutsByCategoryBySlug = async (categorySlug: string) => {
	const categories = await excecuteGraphQL(ProductsByCategoryBySlugDocument, {
		slug: categorySlug,
	});

	return categories.category?.products;
};

export const getProductsByCollection = async (collectionName: string) => {
	const graphqlResponse = await excecuteGraphQL(ProductsByCollectionBySlugDocument, {
		slug: collectionName,
	});
	return graphqlResponse.collection;
};

export const getProdcutsByPage = async () => {
	throw new Error("Not implemented");
};

export const getProductsListStatic = async () => {
	throw new Error("Not implemented");
};
