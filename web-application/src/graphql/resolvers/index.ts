import { getUsers } from "../../services/user.service";

export const resolvers = {
    Query: {

        getUsers: getUsers

    }
}