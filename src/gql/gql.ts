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
    "mutation CartAddProduct($id: ID!, $productId: String!) {\n  cartAddItem(id: $id, input: {item: {productId: $productId}}) {\n    ...Cart\n  }\n}": types.CartAddProductDocument,
    "mutation CartComplete($cartId: ID!) {\n  cartComplete(cartId: $cartId) {\n    id\n    totalAmount\n    lines\n    status\n  }\n}": types.CartCompleteDocument,
    "mutation CartFindOrCreate($id: ID!) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...Cart\n  }\n}": types.CartFindOrCreateDocument,
    "fragment Cart on Cart {\n  id\n  items {\n    quantity\n    product {\n      id\n      name\n      price\n      categories {\n        slug\n        name\n      }\n      images {\n        url\n        alt\n        height\n        width\n      }\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query ProdcutsById($id: ID) {\n  product(id: $id) {\n    id\n    name\n    categories {\n      name\n      slug\n    }\n    price\n    description\n    images {\n      url\n      alt\n      height\n      width\n    }\n    rating\n    reviews {\n      ...ReviewItem\n    }\n  }\n}": types.ProdcutsByIdDocument,
    "query ProductsByCategoryBySlug($slug: String) {\n  category(slug: $slug) {\n    name\n    description\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsByCategoryBySlugDocument,
    "query ProductsByCollectionBySlug($slug: String) {\n  collection(slug: $slug) {\n    id\n    slug\n    name\n    description\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsByCollectionBySlugDocument,
    "query ProductsGetList($take: Int!) {\n  products(take: $take) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n    alt\n    width\n    height\n  }\n  price\n  rating\n}": types.ProductsListItemFragmentDoc,
    "query ProductsPaginatedList($take: Int!, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsPaginatedListDocument,
    "query ProductsSearchBySearch($search: String) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsSearchBySearchDocument,
    "query ProductsSuggestedBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsSuggestedBySlugDocument,
    "mutation ReviewCreateForProduct($name: String!, $content: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $name\n    description: $content\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.ReviewCreateForProductDocument,
    "fragment ReviewItem on Review {\n  author\n  description\n  rating\n  id\n  createdAt\n  title\n  email\n}": types.ReviewItemFragmentDoc,
    "query ReviewGetByProductId($productId: ID!) {\n  product(id: $productId) {\n    id\n    reviews {\n      ...ReviewItem\n    }\n  }\n}": types.ReviewGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($id: ID!, $productId: String!) {\n  cartAddItem(id: $id, input: {item: {productId: $productId}}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartComplete($cartId: ID!) {\n  cartComplete(cartId: $cartId) {\n    id\n    totalAmount\n    lines\n    status\n  }\n}"): typeof import('./graphql').CartCompleteDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID!) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    quantity\n    product {\n      id\n      name\n      price\n      categories {\n        slug\n        name\n      }\n      images {\n        url\n        alt\n        height\n        width\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProdcutsById($id: ID) {\n  product(id: $id) {\n    id\n    name\n    categories {\n      name\n      slug\n    }\n    price\n    description\n    images {\n      url\n      alt\n      height\n      width\n    }\n    rating\n    reviews {\n      ...ReviewItem\n    }\n  }\n}"): typeof import('./graphql').ProdcutsByIdDocument;
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
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  categories {\n    name\n  }\n  images {\n    url\n    alt\n    width\n    height\n  }\n  price\n  rating\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsPaginatedList($take: Int!, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {\n  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsPaginatedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchBySearch($search: String) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsSearchBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSuggestedBySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsSuggestedBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreateForProduct($name: String!, $content: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $name\n    description: $content\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateForProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItem on Review {\n  author\n  description\n  rating\n  id\n  createdAt\n  title\n  email\n}"): typeof import('./graphql').ReviewItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewGetByProductId($productId: ID!) {\n  product(id: $productId) {\n    id\n    reviews {\n      ...ReviewItem\n    }\n  }\n}"): typeof import('./graphql').ReviewGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
