import { loadEnvConfig } from "@next/env";
import {
	ProdcutsByIdDocument,
	ProductsByCategoryBySlugDocument,
	ProductsByCollectionBySlugDocument,
	ProductsGetListDocument,
	ProductsPaginatedListDocument,
	ProductsSearchBySearchDocument,
	ProductsSuggestedBySlugDocument,
} from "@/gql/graphql";
import { excecuteGraphQL } from "@/api/graphqlApi";
loadEnvConfig(process.cwd());

export const getProductsList = async (numberOfItems: number) => {
	const graphqlResponse = await excecuteGraphQL(ProductsGetListDocument, { take: numberOfItems });
	return graphqlResponse.products.data;
};

export const getProductsById = async (productId: string) => {
	const graphqlResponse = await excecuteGraphQL(ProdcutsByIdDocument, { id: productId });
	return graphqlResponse;
};

export const getProdcutsByCategoryBySlug = async (categorySlug: string) => {
	const graphqlResponse = await excecuteGraphQL(ProductsByCategoryBySlugDocument, {
		slug: categorySlug,
	});

	return graphqlResponse.category;
};

export const getProductsByCollection = async (collectionName: string) => {
	const graphqlResponse = await excecuteGraphQL(ProductsByCollectionBySlugDocument, {
		slug: collectionName,
	});
	return graphqlResponse.collection;
};

export const getProductsSuggestedBySlug = async (slug: string) => {
	const graphqlResponse = await excecuteGraphQL(ProductsSuggestedBySlugDocument, { slug: slug });
	return graphqlResponse.category?.products;
};

export const getProductsPaginatedList = async (takeNumber: number, skipNumber: number) => {
	const graphqlResponse = await excecuteGraphQL(ProductsPaginatedListDocument, {
		take: takeNumber,
		skip: skipNumber,
	});
	return graphqlResponse.products;
};

export const getProductsSearchBySearch = async (searchQuery: string) => {
	const graphqlResponse = await excecuteGraphQL(ProductsSearchBySearchDocument, {
		search: searchQuery,
	});
	return graphqlResponse.products;
};
