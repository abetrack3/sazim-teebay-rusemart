import prisma from "../utils/prisma.client";

export const getUsers = async () => await prisma.user.findMany();

export const getUserExistsByEmail = async (email: string) => await prisma.user.count({ where: { email: email }}) !== 0;
