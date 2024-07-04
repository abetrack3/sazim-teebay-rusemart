import { PrismaClient } from "@prisma/client";
import { adminUser } from "../data/seed.data";

const prisma: PrismaClient = new PrismaClient();

const main = async () => {

    await prisma.user.create({
        data: {
            email: adminUser.email,
            firstName: adminUser.firstName,
            lastName: adminUser.lastName,
            address: adminUser.address,
            password: adminUser.password,
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