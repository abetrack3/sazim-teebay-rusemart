import { Decimal } from "@prisma/client/runtime/library";

export const seedUser = {
    id: 1,
    email: 'a@a.com',
    firstName: 'John',
    lastName: 'Doe',
    address: 'Do not want to share',
    password: 'aaa',
};

export const seedProduct = {
    id: 1,
    categories: ['cat', 'dog'],
    description: 'cannot be described',
    name: 'siamese cat',
    title: 'bull dog',
    purchaseOption: 'not considered at the moment',
    purchasePrice: new Decimal(23.0),
    rentOption: "not considered at the moment",
    rentPrice: new Decimal(33.0),
    ownerId: 1
}

