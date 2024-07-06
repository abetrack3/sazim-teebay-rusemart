import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const apiUrl: string = import.meta.env.VITE_APOLLO_GRAPHQL_API_ENDPOINT;

const httpLink = createHttpLink({
	uri: apiUrl,
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token');
	return {
		headers: {
			...headers,
			token: token ?? "",
		}
	}
});

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default apolloClient;