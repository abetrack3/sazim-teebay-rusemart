import { seedProducts } from './../data/seed.data';
import { PrismaClient } from "@prisma/client";
import { seedUsers } from "../data/seed.data";

const prisma: PrismaClient = new PrismaClient();

const main = async () => {

    await prisma.user.createMany({ data: seedUsers });

    await prisma.product.createMany({ data: seedProducts });
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })