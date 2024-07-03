import prisma from "../utils/prisma.client";

export const getUsers = async () => await prisma.user.findMany();
