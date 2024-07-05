import apolloClient from "../graphql/client";
import CREATE_USER from "../graphql/mutations/user.mutations";
import GET_USER_EXISTS_BY_EMAIL from "../graphql/queries/user.queries";

export const userExistsByEmail = async (email: string) => {
    const { data } = await apolloClient.query({
        query: GET_USER_EXISTS_BY_EMAIL,
        variables: { email },
    });
    return data.getUserExistsByEmail;
};

export const createUser = async (
    email: string,
    firstName: string,
    lastName: string,
    address: string,
    password: string
) => {
    const { data } = await apolloClient.mutate({
        mutation: CREATE_USER,
        variables: { email, firstName, lastName, address, password }
    })

    return data.createUser;
};