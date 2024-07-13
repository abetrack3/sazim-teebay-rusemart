import { gql } from "@apollo/client";

export const DELETE_PRODUCT_BY_ID = gql`

mutation DeleteProductById($productId: String!) {
  deleteProductById(productId: $productId)
}

`;

export const CREATE_PRODUCT = gql`
mutation CreateProduct($title: String!, $purchasePrice: Float!, $rentPrice: Float!, $rentOption: String!, $description: String, $categories: [String]) {
  createProduct(title: $title, purchasePrice: $purchasePrice, rentPrice: $rentPrice, rentOption: $rentOption, description: $description, categories: $categories) {
    title
    categories
    description
    purchasePrice
    rentPrice
    rentOption
    isSold
    purchaseId
  }
}

`;

export const UPDATE_PRODUCT = gql`

mutation UpdateProduct($id: String!, $title: String!, $description: String!, $purchasePrice: Float!, $rentPrice: Float!, $rentOption: String!, $categories: [String]) {
  updateProduct(id: $id, title: $title, description: $description, purchasePrice: $purchasePrice, rentPrice: $rentPrice, rentOption: $rentOption, categories: $categories) {
    id
    createdAt
    updatedAt
    title
    categories
    description
    purchasePrice
    rentPrice
    rentOption
    ownerId
    isSold
    purchaseId
  }
}`;

export const PURCHASE_PRODUCT = gql`

mutation PurchaseProduct($sellerId: String!, $productId: String!, $purchasePriceAtTimeOfTransaction: Float!, $rentPriceAtTimeOfTransaction: Float!, $rentOptionAtTimeOfTransaction: String!) {
  purchaseProduct(sellerId: $sellerId, productId: $productId, purchasePriceAtTimeOfTransaction: $purchasePriceAtTimeOfTransaction, rentPriceAtTimeOfTransaction: $rentPriceAtTimeOfTransaction, rentOptionAtTimeOfTransaction: $rentOptionAtTimeOfTransaction) {
    updatedProduct {
      id
      createdAt
      updatedAt
      title
      categories
      description
      purchasePrice
      rentPrice
      rentOption
      ownerId
      isSold
      purchaseId
    }
    newPurchase {
      id
      createdAt
      updatedAt
      sellerId
      buyerId
      productId
      purchasePriceAtTimeOfTransaction
      rentPriceAtTimeOfTransaction
      rentOptionAtTimeOfTransaction
    }
  }
}`;

export const RENT_PRODUCT = gql`

mutation RentProduct($offererId: String!, $productId: String!, $toDateAsString: String!, $fromDateAsString: String!, $rentPriceAtTimeOfTransaction: Float!, $rentOptionAtTimeOfTransaction: String!) {
  rentProduct(offererId: $offererId, productId: $productId, toDateAsString: $toDateAsString, fromDateAsString: $fromDateAsString, rentPriceAtTimeOfTransaction: $rentPriceAtTimeOfTransaction, rentOptionAtTimeOfTransaction: $rentOptionAtTimeOfTransaction) {
    id
    createdAt
    updatedAt
    rentedFromId
    rentedToId
    productId
    rentTimelineStart
    rentTimelineEnd
    rentPriceAtTimeOfTransaction
    rentOptionAtTimeOfTransaction
  }
}`;
