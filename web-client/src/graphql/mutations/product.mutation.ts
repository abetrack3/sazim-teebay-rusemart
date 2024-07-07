import { gql } from "@apollo/client";

export const DELETE_PRODUCT_BY_ID = gql`

mutation DeleteProductById($productId: Int!) {
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
  }
}

`;