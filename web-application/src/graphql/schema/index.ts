export const typeDefinitions = `#graphql

enum Role {
    USER
    ADMIN
    # Add other roles as necessary
}

type User {
    id: Int!
    createdAt: String!
    updatedAt: String!
    email: String!
    role: Role!
    firstName: String!
    lastName: String!
    address: String!
}

type Query {
    
    getUser(id: Int!): User
    
    getUsers: [User]

    getUserExistsByEmail(email: String): Boolean
}

type Mutation {
    
    createUser(
      email: String!,
      role: Role!,
      firstName: String!,
      lastName: String!,
      address: String!,
    ): User
    
    updateUser(
      id: Int!,
      email: String,
      role: Role,
      firstName: String,
      lastName: String,
      address: String,
    ): User
    
    deleteUser(id: Int!): Boolean
}
`;