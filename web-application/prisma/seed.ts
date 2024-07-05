import { PrismaClient } from "@prisma/client";
import { seedUser } from "../data/seed.data";

const prisma: PrismaClient = new PrismaClient();

const main = async () => {

    await prisma.user.create({
        data: {
            email: seedUser.email,
            firstName: seedUser.firstName,
            lastName: seedUser.lastName,
            address: seedUser.address,
            password: seedUser.password,
        },
    });
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })