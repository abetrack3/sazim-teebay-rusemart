import { seedProduct } from './../data/seed.data';
import { PrismaClient } from "@prisma/client";
import { seedUser } from "../data/seed.data";

const prisma: PrismaClient = new PrismaClient();

const main = async () => {

    await prisma.user.create({ data: { ...seedUser }});

    await prisma.product.create({ data: { ...seedProduct }});
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })