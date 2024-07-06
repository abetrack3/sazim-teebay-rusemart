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

type Product {
    id: Int!
    createdAt: String!
    updatedAt: String!
    name: String!
    title: String!
    categories: [String]
    description: String
    purchasePrice: Float!
    purchaseOption: String!
    rentPrice: Float!
    rentOption: String!
    ownerId: Int!
    owner: User
}

type Query {

    getUserExistsByEmail(email: String): Boolean
    getAllUserProducts: [Product]
	
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

    authToken(email: String!, password: String!): String

	createProduct(
		name: String!,
		title: String!,
		categories: [String],
		description: String,
		purchasePrice: Float!,
		purchaseOption: String!,
		rentPrice: Float!,
		rentOption: String!,
		ownerId: Int!,
	): Product

  deleteProductById(productId: Int!): Boolean
    
}
`;