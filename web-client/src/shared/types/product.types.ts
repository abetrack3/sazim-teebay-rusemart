export type Product = {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    title: string;
    categories: string[];
    description: string;
    purchasePrice: number;
    purchaseOption: string;
    rentPrice: number;
    rentOption: string;
    ownerId: number;
}