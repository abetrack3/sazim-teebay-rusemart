import { Decimal } from "@prisma/client/runtime/library";

export const seedUser = {
    id: "d4d0e400-8eba-453c-8a29-1803a0d48cbe",
    email: 'a@a.com',
    firstName: 'John',
    lastName: 'Doe',
    address: 'Do not want to share',
    password: 'aaa',
};

export const seedProduct = {
    id: "18843727-29bd-4b18-96d3-b3d11c56bc39",
    categories: ['Toys'],
    description: 'cannot be described',
    title: 'bull dog',
    purchasePrice: new Decimal(23.0),
    rentOption: "not considered at the moment",
    rentPrice: new Decimal(33.0),
    ownerId: "d4d0e400-8eba-453c-8a29-1803a0d48cbe",
}

