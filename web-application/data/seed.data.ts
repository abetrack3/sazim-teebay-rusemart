import { Role } from "@prisma/client";

export const adminUser = {
    email: 'sazimtest@yopmail.com',
    role: Role.ADMIN,
    firstName: 'John',
    lastName: 'Doe',
    address: 'Do not want to share',
    hashedPassword: 'very unsafe!'
};