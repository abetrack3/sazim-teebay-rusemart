import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiUrl: string = import.meta.env.VITE_APOLLO_GRAPHQL_API_ENDPOINT;

const apolloClient = new ApolloClient({
	uri: apiUrl,
	cache: new InMemoryCache(),
});

export default apolloClient;