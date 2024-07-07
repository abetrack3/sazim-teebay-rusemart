import { gql } from "@apollo/client";

export const GET_ALL_USER_PRODUCTS = gql`

query GetAllUserProducts {
  getAllUserProducts {
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
  }
}

`;

export const GET_ALL_MARKET_AVAILABLE_PRODUCTS = gql`

query GetAllMarketAvailableProducts {
  getAllMarketAvailableProducts {
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
  }
}

`;
