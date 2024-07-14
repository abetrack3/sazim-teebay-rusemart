import { User } from "@prisma/client";
import prisma from "../utils/prisma.client";

export const getUserExistsByEmail = async (email: string) => {
    return await prisma.user.count({ where: { email: email } }) !== 0;
};

export const createUser = async (user: User) => {
    return await prisma.user.create({ data: { ...user } });
};

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({ where: { email: email }});
};