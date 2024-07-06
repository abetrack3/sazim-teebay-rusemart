import { gql } from "@apollo/client";

const GET_ALL_USER_PRODUCTS = gql`

query GetAllUserProducts {
  getAllUserProducts {
    id
    createdAt
    updatedAt
    name
    title
    categories
    description
    purchasePrice
    purchaseOption
    rentPrice
    rentOption
    ownerId
  }
}

`;

export default GET_ALL_USER_PRODUCTS;