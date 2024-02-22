import { loadEnvConfig } from "@next/env";
import {
	ProdcutsByIdDocument,
	ProductsByCategoryBySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { excecuteGraphQL } from "@/api/graphqlApi";
loadEnvConfig(process.cwd());

export const getProductsList = async () => {
	const graphqlResponse = await excecuteGraphQL(ProductsGetListDocument, {});
	return graphqlResponse.products.data;
};
``;

export const getProductsListStatic = async () => {
	throw new Error("Not implemented");
};

export const getProductsById = async (productId: string) => {
	const product = await excecuteGraphQL(ProdcutsByIdDocument, { id: productId });
	//console.log(product);
	return product;
};

export const getProdcutsByCategoryBySlug = async (categorySlug: string) => {
	const categories = await excecuteGraphQL(ProductsByCategoryBySlugDocument, {
		slug: categorySlug,
	});

	return categories.category?.products;
};

export const getProdcutsByPage = async () => {
	throw new Error("Not implemented");
};
