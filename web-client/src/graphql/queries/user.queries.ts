import { gql } from "@apollo/client";

const GET_USER_EXISTS_BY_EMAIL = gql`
    query GetUserExistsByEmail($email: String) {
        getUserExistsByEmail(email: $email) 
    }
`;

export default GET_USER_EXISTS_BY_EMAIL;