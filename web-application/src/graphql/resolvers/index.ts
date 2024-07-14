import {
    createProduct,
    deleteProductById,
    getAllMarketAvailableProducts,
    getAllProductsByOwnerId,
    getMarketplaceProductById,
    getUserProductByIdAndOwnerId,
    updateProductByIdAndOwnerId,
} from './../../services/product.service';
import { Product, User } from "@prisma/client";
import { createUser, getUserExistsByEmail } from "../../services/user.service";
import { getAuthToken } from "../../services/auth.service";
import { ApplicationContext, ProductPurchaseParameter, ProductRentParameter } from '../../common/model';
import { requiresAuthenticatedUser } from '../../middlewares/auth.middleware';
import { getUserPurchasedProducts, getUserSoldProducts, purchaseProduct } from '../../services/product-purchase.service';
import { getRentTimelineOverlapExist, getUserBorrowedProducts, getUserOfferedProducts, rentProduct } from '../../services/product-rentals.service';

export const resolvers = {
    Query: {

        // public apis
        getUserExistsByEmail: async (_: never, args: {email: string}) => {
            return await getUserExistsByEmail(args.email);
        },

        getAllMarketAvailableProducts: async () => {
            return await getAllMarketAvailableProducts();
        },

        getMarketplaceProductById: async (_: never, args: {productId: string}) => {
            return await getMarketplaceProductById(args.productId);
        },


        // secured apis
        getAllUserProducts: async (_: never, __: never, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return getAllProductsByOwnerId(context.authenticatedUser?.id as string)
            });
        },

        getUserProductById: async (_: never, { productId }: {productId: string}, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return getUserProductByIdAndOwnerId(productId, context.authenticatedUser?.id as string)
            });
        },

        getUserPurchasedProducts: async (_: never, __: never, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return getUserPurchasedProducts(context.authenticatedUser?.id as string)
            });
        },

        getUserSoldProducts: async (_: never, __: never, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return getUserSoldProducts(context.authenticatedUser?.id as string)
            });
        },

        getUserBorrowedProducts: async (_: never, __: never, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return getUserBorrowedProducts(context.authenticatedUser?.id as string)
            });
        },

        getUserOfferedProducts: async (_: never, __: never, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return getUserOfferedProducts(context.authenticatedUser?.id as string)
            });
        },

        getRentTimelineOverlapExist: async (_: never, args: {productId: string, fromDateAsString: string, toDateAsString: string}, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return getRentTimelineOverlapExist(args.productId, args.fromDateAsString, args.toDateAsString)
            });
        },


    },

    Mutation: {
        
        // public apis
        createUser: async (_: never, user: User) => {
            return await createUser(user);
        },

        authToken: async (_: never, credential: {email: string, password: string}) => {
            return await getAuthToken(credential.email, credential.password);
        },


        // secured apis
        createProduct: async (_: never, product: Product, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return createProduct(context.authenticatedUser?.id as string, product)
            });
        },

        deleteProductById: async (_: never, args: {productId: string}, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, async () => {
                return await deleteProductById(args.productId, context.authenticatedUser?.id as string) ? true : false;
            });
        },

        updateProduct: async (_: never, product: Product, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return updateProductByIdAndOwnerId(product.id, product, context.authenticatedUser?.id as string)
            });
        },

        purchaseProduct: async (_: never, purchaseParams: ProductPurchaseParameter, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return purchaseProduct(context.authenticatedUser?.id as string, purchaseParams)
            });
        },

        rentProduct: async (_: never, rentParams: ProductRentParameter, context: ApplicationContext) => {
            return await requiresAuthenticatedUser(context, () => {
                return rentProduct(context.authenticatedUser?.id as string, rentParams)
            });
        },

    },
};