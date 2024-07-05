import apolloClient from "../graphql/client"
import GET_AUTH_TOKEN from "../graphql/mutations/auth.mutations"

export const getAuthToken = async (email: string, password: string) => {

    const { data } = await apolloClient.mutate({
        mutation: GET_AUTH_TOKEN,
        variables: { email, password },
    });

    const token: string = data.authToken ?? '';

    localStorage.setItem('token', token);

    return token;

}