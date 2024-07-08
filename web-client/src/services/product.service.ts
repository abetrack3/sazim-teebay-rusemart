import apolloClient from "../graphql/client"
import { CREATE_PRODUCT, DELETE_PRODUCT_BY_ID } from "../graphql/mutations/product.mutation";
import { GET_ALL_MARKET_AVAILABLE_PRODUCTS, GET_ALL_USER_PRODUCTS } from "../graphql/queries/product.queries"
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

export const createProduct = async (product: Product) => {
    
    const { data } = await apolloClient.mutate({
        mutation: CREATE_PRODUCT,
        variables: { ...product },
    });

    await apolloClient.resetStore();

    return data.createProduct as Product;

};

export const getAllMarketAvailableProducts = async () => {

    const { data } = await apolloClient.query({
        query: GET_ALL_MARKET_AVAILABLE_PRODUCTS,
    });

    return data.getAllMarketAvailableProducts as Product[];

}