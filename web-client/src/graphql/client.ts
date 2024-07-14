import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { isTokenExpired } from "../utils/jwt.utils";

const apiUrl: string = import.meta.env.VITE_APOLLO_GRAPHQL_API_ENDPOINT;

const httpLink = createHttpLink({
	uri: apiUrl,
});

const authLink = setContext((_, { headers }) => {
	let token = localStorage.getItem('token');
	const isExpired = token ? isTokenExpired(token) : true;
	if (isExpired) {
		localStorage.removeItem('token');
		token = null;
	}
	return {
		headers: {
			...headers,
			token: token ?? "",
		}
	}
});

const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
});

const logoutLink = onError(({ networkError }) => {
	if (networkError?.message === 'User is not authenticated') {
		localStorage.removeItem('token');
		apolloClient.resetStore();
		window.location.href='/login';
	}
})

// const apolloClient = new ApolloClient({
// 	link: authLink.concat(httpLink).concat(logoutLink),
// 	cache: new InMemoryCache(),
// });

apolloClient.setLink(authLink.concat(httpLink).concat(logoutLink));

export default apolloClient;