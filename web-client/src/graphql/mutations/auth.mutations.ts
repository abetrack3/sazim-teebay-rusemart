import { gql } from "@apollo/client";

const GET_AUTH_TOKEN = gql`

    mutation AuthToken($email: String!, $password: String!) {
        authToken(email: $email, password: $password)
    }

`;

export default GET_AUTH_TOKEN;