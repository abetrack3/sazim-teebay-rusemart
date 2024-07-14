import apolloClient from "../graphql/client"
import GET_AUTH_TOKEN from "../graphql/mutations/auth.mutations"
import { getDecodedToken } from "../utils/jwt.utils";

export const getAuthToken = async (email: string, password: string) => {

    const { data } = await apolloClient.mutate({
        mutation: GET_AUTH_TOKEN,
        variables: { email, password },
    });

    const token: string = data.authToken ?? '';

    await apolloClient.resetStore();

    return token;

}

export const isLoggedIn = () => localStorage.getItem('token') !== null; //TODO: need to check token expiry as well

export const logoutUser = async () => {
    localStorage.removeItem('token');
    await apolloClient.resetStore();
};

export const getLoggedInUserId = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    const decoded = getDecodedToken(token);
    return decoded?.id;
}