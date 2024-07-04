import { getUserExistsByEmail, getUsers } from "../../services/user.service";

export const resolvers = {
    Query: {

        getUsers: getUsers,

        getUserExistsByEmail: async (_parent: never, args: {email: string}) => await getUserExistsByEmail(args.email),

    }
};