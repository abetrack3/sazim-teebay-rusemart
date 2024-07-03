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
    hashedPassword: String!
}

type Query {
    
    getUser(id: Int!): User
    
    getUsers: [User]
}

type Mutation {
    
    createUser(
      email: String!,
      role: Role!,
      firstName: String!,
      lastName: String!,
      address: String!,
      hashedPassword: String!
    ): User
    
    updateUser(
      id: Int!,
      email: String,
      role: Role,
      firstName: String,
      lastName: String,
      address: String,
      hashedPassword: String
    ): User
    
    deleteUser(id: Int!): Boolean
}

`;