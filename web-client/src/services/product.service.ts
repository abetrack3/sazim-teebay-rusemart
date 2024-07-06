import apolloClient from "../graphql/client"
import GET_ALL_USER_PRODUCTS from "../graphql/queries/product.queries"
import { Product } from "../shared/types/product.types";

export const getAllUserProducts = async () => {
    const { data } = await apolloClient.query({
        query: GET_ALL_USER_PRODUCTS,
    })

    return data.getAllUserProducts as Product[];
}