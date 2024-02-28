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
	const graphqlResponse = await excecuteGraphQL({
		query: ProductsGetListDocument,
		variables: { take: numberOfItems },
		next: {
			revalidate: 15,
		},
	});
	return graphqlResponse.products.data;
};

export const getProductsById = async (productId: string) => {
	const graphqlResponse = await excecuteGraphQL({
		query: ProdcutsByIdDocument,
		variables: { id: productId },
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse;
};

export const getProdcutsByCategoryBySlug = async (categorySlug: string) => {
	const graphqlResponse = await excecuteGraphQL({
		query: ProductsByCategoryBySlugDocument,
		variables: {
			slug: categorySlug,
		},
	});

	return graphqlResponse.category;
};

export const getProductsByCollection = async (collectionName: string) => {
	const graphqlResponse = await excecuteGraphQL({
		query: ProductsByCollectionBySlugDocument,
		variables: {
			slug: collectionName,
		},
	});
	return graphqlResponse.collection;
};

export const getProductsSuggestedBySlug = async (slug: string) => {
	const graphqlResponse = await excecuteGraphQL({
		query: ProductsSuggestedBySlugDocument,
		variables: { slug: slug },
	});
	return graphqlResponse.category?.products;
};

export const getProductsPaginatedList = async (takeNumber: number, skipNumber: number) => {
	const graphqlResponse = await excecuteGraphQL({
		query: ProductsPaginatedListDocument,
		variables: {
			take: takeNumber,
			skip: skipNumber,
		},
	});
	return graphqlResponse.products;
};

export const getProductsSearchBySearch = async (searchQuery: string) => {
	const graphqlResponse = await excecuteGraphQL({
		query: ProductsSearchBySearchDocument,
		variables: {
			search: searchQuery,
		},
		next: {
			revalidate: 1,
		},
	});
	return graphqlResponse.products;
};
