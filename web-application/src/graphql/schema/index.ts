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

type ProductRentals {
  id: String!
  createdAt: String!
  updatedAt: String!
  rentedFromId: String!
  rentedToId: String!
  productId: String!
  rentTimelineStart: String!
  rentTimelineEnd: String!
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
    getUserPurchasedProducts: [Product]
    getUserSoldProducts: [Product]
    getUserBorrowedProducts: [Product]
    getUserOfferedProducts: [Product]
    getRentTimelineOverlapExist(
      productId: String!,
      fromDateAsString: String!,
      toDateAsString: String!
    ): Boolean
	
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
    productId: String!,
    purchasePriceAtTimeOfTransaction: Float!,
    rentPriceAtTimeOfTransaction: Float!,
    rentOptionAtTimeOfTransaction: String!
  ): PurchaseResult

  rentProduct(
    offererId: String!,
    productId: String!,
    toDateAsString: String!,
    fromDateAsString: String!,
    rentPriceAtTimeOfTransaction: Float!,
    rentOptionAtTimeOfTransaction: String!
  ): ProductRentals
    
}
`;