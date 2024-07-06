import { createProduct, getAllProductsByOwnerId } from './../../services/product.service';
import { Product, User } from "@prisma/client";
import { createUser, getUserExistsByEmail } from "../../services/user.service";
import { getAuthToken } from "../../services/auth.service";
import ApplicationContext from '../../common/model';
import { requiresAuthenticatedUser } from '../../middlewares/auth.middleware';

export const resolvers = {
    Query: {

        // public apis
        getUserExistsByEmail: async (_: never, args: {email: string}) => await getUserExistsByEmail(args.email),

        // secured apis
        getAllUserProducts: async(_: never, __: never, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => getAllProductsByOwnerId(context.authenticatedUser?.id as number)),

    },

    Mutation: {
        
        // public apis
        createUser: async (_: never, user: User) => await createUser(user),
        authToken: async (_: never, credential: {email: string, password: string}) => await getAuthToken(credential.email, credential.password),

        // secured apis
        createProduct: async (_: never, product: Product, context: ApplicationContext) => await requiresAuthenticatedUser(context, () => createProduct(product)),
        
    },
};