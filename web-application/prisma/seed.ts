import { PrismaClient, Role } from "@prisma/client";
import { adminUser } from "../data/seedData";

const prisma: PrismaClient = new PrismaClient();

const main = async () => {

    await prisma.user.create({
        data: {
            email: adminUser.email,
            role: Role.ADMIN,
            firstName: adminUser.firstName,
            lastName: adminUser.lastName,
            address: adminUser.address,
            hashedPassword: adminUser.hashedPassword,
        },
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })