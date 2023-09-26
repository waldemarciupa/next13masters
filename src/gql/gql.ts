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
    "fragment CollectionItem on Collection {\n  id\n  slug\n  name\n  description\n  image {\n    url\n  }\n}": types.CollectionItemFragmentDoc,
    "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionItem\n  }\n}": types.CollectionsGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    ...CollectionItem\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductItemFragmentDoc,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetByCategorySlug($slug: String!) {\n  products(first: 10, where: {categories_some: {slug: $slug}}) {\n    ...ProductItem\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  products(first: 10, where: {collections_some: {slug: $slug}}) {\n    ...ProductItem\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetList($take: Int) {\n  products(first: $take) {\n    ...ProductItem\n  }\n}": types.ProductsGetListDocument,
};

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
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
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
export function graphql(source: "query ProductsGetList($take: Int) {\n  products(first: $take) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
