/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartAddProductMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['String']['input'];
}>;


export type CartAddProductMutation = { cartAddItem: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, categories: Array<{ slug: string, name: string }>, images: Array<{ url: string, alt: string, height: number, width: number }> } }> } };

export type CartCompleteMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
}>;


export type CartCompleteMutation = { cartComplete: { id: string, totalAmount: number, lines: unknown, status: OrderStatus } };

export type CartFindOrCreateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartFindOrCreateMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, categories: Array<{ slug: string, name: string }>, images: Array<{ url: string, alt: string, height: number, width: number }> } }> } };

export type CartFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, categories: Array<{ slug: string, name: string }>, images: Array<{ url: string, alt: string, height: number, width: number }> } }> };

export type CartRemoveProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveProductMutation = { cartRemoveItem: { id: string } };

export type CartSetProductQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartSetProductQuantityMutation = { cartChangeItemQuantity: { id: string } };

export type ProdcutsByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProdcutsByIdQuery = { product?: { id: string, name: string, price: number, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string, height: number, width: number }>, reviews: Array<{ author: string, description: string, rating: number, id: string, createdAt: unknown, title: string, email: string }> } | null };

export type ProductsByCategoryBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsByCategoryBySlugQuery = { category?: { name: string, description: string, products: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string, width: number, height: number }> }> } | null };

export type ProductsByCollectionBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsByCollectionBySlugQuery = { collection?: { id: string, slug: string, name: string, description: string, products: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string, width: number, height: number }> }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  take: Scalars['Int']['input'];
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string, width: number, height: number }> }> } };

export type ProductsListItemFragment = { id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string, width: number, height: number }> };

export type ProductsPaginatedListQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductSortBy>;
  order?: InputMaybe<SortDirection>;
}>;


export type ProductsPaginatedListQuery = { products: { data: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string, width: number, height: number }> }>, meta: { total: number } } };

export type ProductsSearchBySearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsSearchBySearchQuery = { products: { data: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string, width: number, height: number }> }> } };

export type ProductsSuggestedBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsSuggestedBySlugQuery = { category?: { products: Array<{ id: string, name: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string, width: number, height: number }> }> } | null };

export type ReviewCreateForProductMutationVariables = Exact<{
  name: Scalars['String']['input'];
  content: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ReviewCreateForProductMutation = { reviewCreate: { id: string } };

export type ReviewItemFragment = { author: string, description: string, rating: number, id: string, createdAt: unknown, title: string, email: string };

export type ReviewGetByProductIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ReviewGetByProductIdQuery = { product?: { id: string, reviews: Array<{ author: string, description: string, rating: number, id: string, createdAt: unknown, title: string, email: string }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    quantity
    product {
      id
      name
      price
      categories {
        slug
        name
      }
      images {
        url
        alt
        height
        width
      }
    }
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const ProductsListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductsListItem on Product {
  id
  name
  categories {
    name
  }
  images {
    url
    alt
    width
    height
  }
  price
  rating
}
    `, {"fragmentName":"ProductsListItem"}) as unknown as TypedDocumentString<ProductsListItemFragment, unknown>;
export const ReviewItemFragmentDoc = new TypedDocumentString(`
    fragment ReviewItem on Review {
  author
  description
  rating
  id
  createdAt
  title
  email
}
    `, {"fragmentName":"ReviewItem"}) as unknown as TypedDocumentString<ReviewItemFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($id: ID!, $productId: String!) {
  cartAddItem(id: $id, input: {item: {productId: $productId}}) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    quantity
    product {
      id
      name
      price
      categories {
        slug
        name
      }
      images {
        url
        alt
        height
        width
      }
    }
  }
}`) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartCompleteDocument = new TypedDocumentString(`
    mutation CartComplete($cartId: ID!) {
  cartComplete(cartId: $cartId) {
    id
    totalAmount
    lines
    status
  }
}
    `) as unknown as TypedDocumentString<CartCompleteMutation, CartCompleteMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID!) {
  cartFindOrCreate(id: $id, input: {}) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    quantity
    product {
      id
      name
      price
      categories {
        slug
        name
      }
      images {
        url
        alt
        height
        width
      }
    }
  }
}`) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartRemoveProductDocument = new TypedDocumentString(`
    mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {
  cartRemoveItem(id: $cartId, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveProductMutation, CartRemoveProductMutationVariables>;
export const CartSetProductQuantityDocument = new TypedDocumentString(`
    mutation CartSetProductQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartSetProductQuantityMutation, CartSetProductQuantityMutationVariables>;
export const ProdcutsByIdDocument = new TypedDocumentString(`
    query ProdcutsById($id: ID) {
  product(id: $id) {
    id
    name
    categories {
      name
      slug
    }
    price
    description
    images {
      url
      alt
      height
      width
    }
    rating
    reviews {
      ...ReviewItem
    }
  }
}
    fragment ReviewItem on Review {
  author
  description
  rating
  id
  createdAt
  title
  email
}`) as unknown as TypedDocumentString<ProdcutsByIdQuery, ProdcutsByIdQueryVariables>;
export const ProductsByCategoryBySlugDocument = new TypedDocumentString(`
    query ProductsByCategoryBySlug($slug: String) {
  category(slug: $slug) {
    name
    description
    products {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  categories {
    name
  }
  images {
    url
    alt
    width
    height
  }
  price
  rating
}`) as unknown as TypedDocumentString<ProductsByCategoryBySlugQuery, ProductsByCategoryBySlugQueryVariables>;
export const ProductsByCollectionBySlugDocument = new TypedDocumentString(`
    query ProductsByCollectionBySlug($slug: String) {
  collection(slug: $slug) {
    id
    slug
    name
    description
    products {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  categories {
    name
  }
  images {
    url
    alt
    width
    height
  }
  price
  rating
}`) as unknown as TypedDocumentString<ProductsByCollectionBySlugQuery, ProductsByCollectionBySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int!) {
  products(take: $take) {
    data {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  categories {
    name
  }
  images {
    url
    alt
    width
    height
  }
  price
  rating
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsPaginatedListDocument = new TypedDocumentString(`
    query ProductsPaginatedList($take: Int!, $skip: Int, $orderBy: ProductSortBy, $order: SortDirection) {
  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {
    data {
      ...ProductsListItem
    }
    meta {
      total
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  categories {
    name
  }
  images {
    url
    alt
    width
    height
  }
  price
  rating
}`) as unknown as TypedDocumentString<ProductsPaginatedListQuery, ProductsPaginatedListQueryVariables>;
export const ProductsSearchBySearchDocument = new TypedDocumentString(`
    query ProductsSearchBySearch($search: String) {
  products(search: $search) {
    data {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  categories {
    name
  }
  images {
    url
    alt
    width
    height
  }
  price
  rating
}`) as unknown as TypedDocumentString<ProductsSearchBySearchQuery, ProductsSearchBySearchQueryVariables>;
export const ProductsSuggestedBySlugDocument = new TypedDocumentString(`
    query ProductsSuggestedBySlug($slug: String!) {
  category(slug: $slug) {
    products {
      ...ProductsListItem
    }
  }
}
    fragment ProductsListItem on Product {
  id
  name
  categories {
    name
  }
  images {
    url
    alt
    width
    height
  }
  price
  rating
}`) as unknown as TypedDocumentString<ProductsSuggestedBySlugQuery, ProductsSuggestedBySlugQueryVariables>;
export const ReviewCreateForProductDocument = new TypedDocumentString(`
    mutation ReviewCreateForProduct($name: String!, $content: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    author: $name
    description: $content
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateForProductMutation, ReviewCreateForProductMutationVariables>;
export const ReviewGetByProductIdDocument = new TypedDocumentString(`
    query ReviewGetByProductId($productId: ID!) {
  product(id: $productId) {
    id
    reviews {
      ...ReviewItem
    }
  }
}
    fragment ReviewItem on Review {
  author
  description
  rating
  id
  createdAt
  title
  email
}`) as unknown as TypedDocumentString<ReviewGetByProductIdQuery, ReviewGetByProductIdQueryVariables>;