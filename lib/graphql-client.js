import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export const gqlClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.STRAPI_GRAPHQL_URL,
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});
