import { createProduct, deleteProductById, getAllMarketAvailableProducts, getAllProductsByOwnerId } from './../../services/product.service';
import { Product, User } from "@prisma/client";
import { createUser, getUserExistsByEmail } from "../../services/user.service";
import { getAuthToken } from "../../services/auth.service";
import ApplicationContext from '../../common/model';
import { requiresAuthenticatedUser } from '../../middlewares/auth.middleware';

export const resolvers = {
    Query: {

        // public apis
        getUserExistsByEmail: async (_: never, args: {email: string}) => await getUserExistsByEmail(args.email),
        getAllMarketAvailableProducts: async () => await getAllMarketAvailableProducts(),

        // secured apis
        getAllUserProducts: async(_: never, __: never, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => getAllProductsByOwnerId(context.authenticatedUser?.id as string)),

    },

    Mutation: {
        
        // public apis
        createUser: async (_: never, user: User) => await createUser(user),
        authToken: async (_: never, credential: {email: string, password: string}) => await getAuthToken(credential.email, credential.password),

        // secured apis
        createProduct: async (_: never, product: Product, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => createProduct(context.authenticatedUser?.id as string, product)),
        deleteProductById: async (_: never, args: {productId: string}, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => deleteProductById(args.productId, context.authenticatedUser?.id as string)) ? true : false,
        
    },
};