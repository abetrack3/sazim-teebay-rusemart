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