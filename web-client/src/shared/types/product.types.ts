export type Product = {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    categories: string[];
    description: string;
    purchasePrice: number;
    rentPrice: number;
    rentOption: string;
    ownerId: string;
    isSold: boolean;
    purchaseId?: string;
}