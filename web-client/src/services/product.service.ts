import apolloClient from "../graphql/client"
import DELETE_PRODUCT_BY_ID from "../graphql/mutations/product.mutation";
import GET_ALL_USER_PRODUCTS from "../graphql/queries/product.queries"
import { Product } from "../shared/types/product.types";

export const getAllUserProducts = async () => {
    const { data } = await apolloClient.query({
        query: GET_ALL_USER_PRODUCTS,
    })

    return data.getAllUserProducts as Product[];
}

export const deleteProductById = async (productId: number) => {
    const { data } = await apolloClient.mutate({
        mutation: DELETE_PRODUCT_BY_ID,
        variables: { productId },
    });

    return data.deleteProductById as boolean;
}