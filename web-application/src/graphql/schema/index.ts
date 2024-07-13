export const typeDefinitions = `#graphql

type User {
    id: String!
    createdAt: String!
    updatedAt: String!
    email: String!
    firstName: String!
    lastName: String!
    address: String!
    password: String!
}

type Product {
    id: String!
    createdAt: String!
    updatedAt: String!
    title: String!
    categories: [String]
    description: String
    purchasePrice: Float!
    rentPrice: Float!
    rentOption: String!
    ownerId: String!
    owner: User
    isSold: Boolean
    purchaseId: String
}

type Purchase {
  id: String!
  createdAt: String!
  updatedAt: String!
  sellerId: String!
  buyerId: String!
  productId: String!
  purchasePriceAtTimeOfTransaction: Float!
  rentPriceAtTimeOfTransaction: Float!
  rentOptionAtTimeOfTransaction: String!
}

type PurchaseResult {
  updatedProduct: Product
  newPurchase: Purchase
}

type Query {

    getUserExistsByEmail(email: String): Boolean
    getAllUserProducts: [Product]
    getUserProductById(productId: String): Product
    getAllMarketAvailableProducts: [Product]
    getMarketplaceProductById(productId: String): Product
	
}

type Mutation {
    
    createUser(
      email: String!,
      firstName: String!,
      lastName: String!,
      address: String!,
      password: String!
    ): User

    authToken(email: String!, password: String!): String

	createProduct(
		title: String!,
		categories: [String],
		description: String,
		purchasePrice: Float!,
		rentPrice: Float!,
		rentOption: String!,
	): Product

  deleteProductById(productId: String!): Boolean

  updateProduct(
    id: String!,
    title: String!,
    categories: [String],
    description: String!,
    purchasePrice: Float!,
    rentPrice: Float!,
    rentOption: String!,
  ): Product

  purchaseProduct(
    sellerId: String!,
    # buyerId: String!,
    productId: String!,
    purchasePriceAtTimeOfTransaction: Float!,
    rentPriceAtTimeOfTransaction: Float!,
    rentOptionAtTimeOfTransaction: String!
  ): PurchaseResult
    
}
`;