export type Product = {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    categories: string[];
    description: string;
    purchasePrice: number;
    rentPrice: number;
    rentOption: string;
    ownerId: number;
}