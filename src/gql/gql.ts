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
    "mutation CartAddOrUpdateOrder($orderId: ID!, $orderTotal: Int!, $productId: ID!, $total: Int!, $orderItemId: ID!, $quantity: Int!) {\n  upsertOrder(\n    where: {id: $orderId}\n    upsert: {create: {total: $orderTotal, orderItems: {create: {total: $total, quantity: 1, product: {connect: {id: $productId}}}}}, update: {total: $orderTotal, orderItems: {upsert: {where: {id: $orderItemId}, data: {create: {total: $total, quantity: 1, product: {connect: {id: $productId}}}, update: {total: $total, quantity: $quantity, product: {connect: {id: $productId}}}}}}}}\n  ) {\n    id\n  }\n}": types.CartAddOrUpdateOrderDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n    quantity\n  }\n}": types.CartSetProductQuantityDocument,
    "fragment CollectionItem on Collection {\n  id\n  slug\n  name\n  description\n  image {\n    url\n  }\n}": types.CollectionItemFragmentDoc,
    "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionItem\n  }\n}": types.CollectionsGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    ...CollectionItem\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    id\n    name\n    email\n    headline\n    content\n    rating\n  }\n  variants {\n    __typename\n    ... on ProductColorVariant {\n      id\n      name\n      color\n      product {\n        images {\n          url\n        }\n      }\n    }\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n      size\n    }\n    ... on ProductSizeVariant {\n      id\n      name\n      size\n    }\n  }\n}": types.ProductItemFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetBySearch($searchQuery: String!) {\n  products(where: {name_contains: $searchQuery}) {\n    ...ProductItem\n  }\n}": types.ProductGetBySearchDocument,
    "query ProductsGetByCategorySlug($slug: String!) {\n  products(first: 10, where: {categories_some: {slug: $slug}}) {\n    ...ProductItem\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  products(first: 10, where: {collections_some: {slug: $slug}}) {\n    ...ProductItem\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetByRelated($name: String!) {\n  products(first: 4, where: {categories_every: {name_not: $name}}) {\n    ...ProductItem\n  }\n}": types.ProductsGetByRelatedDocument,
    "query ProductsGetList($skip: Int, $first: Int) {\n  products(skip: $skip, first: $first) {\n    ...ProductItem\n  }\n}": types.ProductsGetListDocument,
    "mutation ReviewCreate($data: ReviewCreateInput!) {\n  createReview(data: $data) {\n    id\n    name\n    headline\n    email\n    content\n    rating\n  }\n}": types.ReviewCreateDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddOrUpdateOrder($orderId: ID!, $orderTotal: Int!, $productId: ID!, $total: Int!, $orderItemId: ID!, $quantity: Int!) {\n  upsertOrder(\n    where: {id: $orderId}\n    upsert: {create: {total: $orderTotal, orderItems: {create: {total: $total, quantity: 1, product: {connect: {id: $productId}}}}}, update: {total: $orderTotal, orderItems: {upsert: {where: {id: $orderItemId}, data: {create: {total: $total, quantity: 1, product: {connect: {id: $productId}}}, update: {total: $total, quantity: $quantity, product: {connect: {id: $productId}}}}}}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddOrUpdateOrderDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n    quantity\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionItem on Collection {\n  id\n  slug\n  name\n  description\n  image {\n    url\n  }\n}"): typeof import('./graphql').CollectionItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionItem\n  }\n}"): typeof import('./graphql').CollectionsGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionItem\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  reviews {\n    id\n    name\n    email\n    headline\n    content\n    rating\n  }\n  variants {\n    __typename\n    ... on ProductColorVariant {\n      id\n      name\n      color\n      product {\n        images {\n          url\n        }\n      }\n    }\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n      size\n    }\n    ... on ProductSizeVariant {\n      id\n      name\n      size\n    }\n  }\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySearch($searchQuery: String!) {\n  products(where: {name_contains: $searchQuery}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  products(first: 10, where: {categories_some: {slug: $slug}}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  products(first: 10, where: {collections_some: {slug: $slug}}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByRelated($name: String!) {\n  products(first: 4, where: {categories_every: {name_not: $name}}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductsGetByRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $first: Int) {\n  products(skip: $skip, first: $first) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($data: ReviewCreateInput!) {\n  createReview(data: $data) {\n    id\n    name\n    headline\n    email\n    content\n    rating\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
