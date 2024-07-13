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
import { ApplicationContext, ProductPurchaseParameter } from '../../common/model';
import { requiresAuthenticatedUser } from '../../middlewares/auth.middleware';
import { getUserPurchasedProducts, getUserSoldProducts, purchaseProduct } from '../../services/product-purchase.service';

export const resolvers = {
    Query: {

        // public apis
        getUserExistsByEmail: async (_: never, args: {email: string}) => await getUserExistsByEmail(args.email),
        getAllMarketAvailableProducts: async () => await getAllMarketAvailableProducts(),
        getMarketplaceProductById: async (_: never, args: {productId: string}) => await getMarketplaceProductById(args.productId),

        // secured apis
        getAllUserProducts: async (_: never, __: never, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => getAllProductsByOwnerId(context.authenticatedUser?.id as string)),
        getUserProductById: async (_: never, { productId }: {productId: string}, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => getUserProductByIdAndOwnerId(productId, context.authenticatedUser?.id as string)),
        getUserPurchasedProducts: async (_: never, __: never, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => getUserPurchasedProducts(context.authenticatedUser?.id as string)),
        getUserSoldProducts: async (_: never, __: never, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => getUserSoldProducts(context.authenticatedUser?.id as string)),

    },

    Mutation: {
        
        // public apis
        createUser: async (_: never, user: User) => await createUser(user),
        authToken: async (_: never, credential: {email: string, password: string}) => await getAuthToken(credential.email, credential.password),

        // secured apis
        createProduct: async (_: never, product: Product, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => createProduct(context.authenticatedUser?.id as string, product)),
        deleteProductById: async (_: never, args: {productId: string}, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => deleteProductById(args.productId, context.authenticatedUser?.id as string)) ? true : false,
        updateProduct: async (_: never, product: Product, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => updateProductByIdAndOwnerId(product.id, product, context.authenticatedUser?.id as string)),
        purchaseProduct: async (_: never, purchaseParams: ProductPurchaseParameter, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => purchaseProduct(context.authenticatedUser?.id as string, purchaseParams)),
    },
};