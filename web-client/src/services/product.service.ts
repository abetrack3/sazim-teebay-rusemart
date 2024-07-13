import apolloClient from "../graphql/client"
import { CREATE_PRODUCT, DELETE_PRODUCT_BY_ID, PURCHASE_PRODUCT, UPDATE_PRODUCT } from "../graphql/mutations/product.mutation";
import { GET_ALL_MARKET_AVAILABLE_PRODUCTS, GET_ALL_USER_PRODUCTS, GET_MARKETPLACE_PRODUCT_BY_ID, GET_USER_PRODUCT_BY_ID, GET_USER_PURCHASED_AND_SOLD_PRODUCTS } from "../graphql/queries/product.queries"
import { Product } from "../shared/types/product.types";

export const getAllUserProducts = async () => {
    const { data } = await apolloClient.query({
        query: GET_ALL_USER_PRODUCTS,
    })

    return data.getAllUserProducts as Product[];
}

export const deleteProductById = async (productId: string) => {
    const { data } = await apolloClient.mutate({
        mutation: DELETE_PRODUCT_BY_ID,
        variables: { productId },
    });

    await apolloClient.clearStore();

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

export const getUserProductById = async (productId: string) => {
    const { data } = await apolloClient.query({
        query: GET_USER_PRODUCT_BY_ID,
        variables: { productId }
    });

    return data.getUserProductById as Product;
};

export const updateProduct = async (product: Product) => {

    const { data } = await apolloClient.mutate({
        mutation: UPDATE_PRODUCT,
        variables: { ...product }
    });

    await apolloClient.resetStore();

    return data.updateProduct as Product;

}

export const getMarketplaceProductById = async (productId: string) => {

    const { data } = await apolloClient.query({
        query: GET_MARKETPLACE_PRODUCT_BY_ID,
        variables: { productId },
    });

    return data.getMarketplaceProductById as Product;
};

export const purchaseProduct = async (product: Product) => {

    const { data } = await apolloClient.mutate({
        mutation: PURCHASE_PRODUCT,
        variables: {
            sellerId: product.ownerId,
            productId: product.id,
            purchasePriceAtTimeOfTransaction: product.purchasePrice,
            rentPriceAtTimeOfTransaction: product.rentPrice,
            rentOptionAtTimeOfTransaction: product.rentOption,
        }
    });

    await apolloClient.clearStore();

    return data.updatedProduct && data.newPurchase;

}

export const getUserPurchasedAndSoldProducts = async () => {
    
    const { data } = await apolloClient.query({
        query: GET_USER_PURCHASED_AND_SOLD_PRODUCTS,
    });

    const purchasedProducts: Product[] = data.getUserPurchasedProducts;
    const soldProducts: Product[] = data.getUserSoldProducts;

    return { purchasedProducts, soldProducts };

}
