/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProdcutsById($id: ID) {\n  product(id: $id) {\n    name\n    categories {\n      name\n      slug\n    }\n    price\n    description\n    images {\n      url\n      alt\n      height\n      width\n    }\n  }\n}": types.ProdcutsByIdDocument,
    "query ProductsByCategoryBySlug($slug: String) {\n  category(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsByCategoryBySlugDocument,
    "query ProductsByCollectionBySlug($slug: String) {\n  collection(slug: $slug) {\n    id\n    slug\n    name\n    description\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsByCollectionBySlugDocument,
    "query ProductsGetList($take: Int!) {\n  products(take: $take) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n    alt\n    width\n    height\n  }\n  price\n}": types.ProductsListItemFragmentDoc,
    "query ProductsPaginatedList($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsPaginatedListDocument,
    "query ProductsSuggestedBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsSuggestedBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProdcutsById($id: ID) {\n  product(id: $id) {\n    name\n    categories {\n      name\n      slug\n    }\n    price\n    description\n    images {\n      url\n      alt\n      height\n      width\n    }\n  }\n}"): typeof import('./graphql').ProdcutsByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsByCategoryBySlug($slug: String) {\n  category(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsByCategoryBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsByCollectionBySlug($slug: String) {\n  collection(slug: $slug) {\n    id\n    slug\n    name\n    description\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsByCollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!) {\n  products(take: $take) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n    alt\n    width\n    height\n  }\n  price\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsPaginatedList($take: Int!, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsPaginatedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSuggestedBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsSuggestedBySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
