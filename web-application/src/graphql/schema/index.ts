export const typeDefinitions = `#graphql

type User {
    id: Int!
    createdAt: String!
    updatedAt: String!
    email: String!
    firstName: String!
    lastName: String!
    address: String!
    password: String!
}

type Query {

    getUserExistsByEmail(email: String): Boolean
	
}

type Mutation {
    
    createUser(
		email: String!,
		firstName: String!,
		lastName: String!,
		address: String!,
		password: String!
    ): User
    
    updateUser(
		id: Int!,
		firstName: String,
		lastName: String,
		address: String,
    ): User
    
}
`;