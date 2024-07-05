import { createProduct } from './../../services/product.service';
import { Product, User } from "@prisma/client";
import { createUser, getUserExistsByEmail } from "../../services/user.service";
import { getAuthToken } from "../../services/auth.service";

export const resolvers = {
    Query: {

        getUserExistsByEmail: async (_: never, args: {email: string}) => await getUserExistsByEmail(args.email),

    },

    Mutation: {
        
        createUser: async (_: never, user: User) => await createUser(user),

        authToken: async (_: never, credential: {email: string, password: string}) => await getAuthToken(credential.email, credential.password),

        createProduct: async (_: never, product: Product) => await createProduct(product),

    },
};