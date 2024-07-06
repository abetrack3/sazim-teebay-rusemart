import { gql } from "@apollo/client";

const DELETE_PRODUCT_BY_ID = gql`

mutation DeleteProductById($productId: Int!) {
  deleteProductById(productId: $productId)
}

`;

export default DELETE_PRODUCT_BY_ID;