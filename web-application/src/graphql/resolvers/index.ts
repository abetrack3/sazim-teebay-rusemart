import { User } from "@prisma/client";
import { createUser, getUserExistsByEmail } from "../../services/user.service";

export const resolvers = {
    Query: {

        getUserExistsByEmail: async (_: never, args: {email: string}) => await getUserExistsByEmail(args.email),

    },

    Mutation: {
        
        createUser: async (_: never, user: User) => await createUser(user),

    },
};