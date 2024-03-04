import { loadEnvConfig } from "@next/env";
import {
	ProdcutsByIdDocument,
	type ProductSortBy,
	ProductsByCategoryBySlugDocument,
	ProductsByCollectionBySlugDocument,
	ProductsGetListDocument,
	ProductsPaginatedListDocument,
	ProductsSearchBySearchDocument,
	ProductsSuggestedBySlugDocument,
	ReviewCreateForProductDocument,
	ReviewGetByProductIdDocument,
	type SortDirection,
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

export const getProductsPaginatedList = async (
	takeNumber: number,
	skipNumber: number,
	sort?: { orderBy?: ProductSortBy; order?: SortDirection },
) => {
	const graphqlResponse = await excecuteGraphQL({
		query: ProductsPaginatedListDocument,
		variables: {
			take: takeNumber,
			skip: skipNumber,
			orderBy: sort?.orderBy,
			order: sort?.order,
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

export async function addProductReview(formData: FormData) {
	const graphqlRespone = await excecuteGraphQL({
		query: ReviewCreateForProductDocument,
		variables: {
			title: formData.get("headline") as string,
			content: formData.get("content") as string,
			rating: parseInt(formData.get("rating") as string),
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			productId: formData.get("productId") as string,
			createAt: new Date().toISOString(),
		},
		next: {
			tags: ["review"],
		},
	});
	if (!graphqlRespone) {
		throw new Error("Failed to add review");
	}
	return graphqlRespone;
}

export async function getProductByIdReview(productId: string) {
	const graphqlRespone = await excecuteGraphQL({
		query: ReviewGetByProductIdDocument,
		variables: { productId: productId },
		cache: "no-store",
		next: {
			tags: ["review"],
		},
	});
	if (!graphqlRespone) {
		throw new Error("Failed to get product review");
	}
	return graphqlRespone;
}
