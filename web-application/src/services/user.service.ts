import { User } from "@prisma/client";
import prisma from "../utils/prisma.client";

export const getUserExistsByEmail = async (email: string) => await prisma.user.count({ where: { email: email } }) !== 0;

export const createUser = async (user: User) => await prisma.user.create({ data: { ...user } });

export const getUserCredentialByEmail = async (email: string) => await prisma.user.findUnique({
    where: { email: email },
    select: { email: true, password: true }
});