import { gql } from "@apollo/client";

const CREATE_USER = gql`
    mutation CreateUser($email: String!, $firstName: String!, $lastName: String!, $address: String!, $password: String!) {
		createUser(email: $email, firstName: $firstName, lastName: $lastName, address: $address, password: $password) {
			address
 			createdAt
 			email
 			firstName
 			id
 			lastName
 			password
 			updatedAt
 		}
    }
`;

export default CREATE_USER;