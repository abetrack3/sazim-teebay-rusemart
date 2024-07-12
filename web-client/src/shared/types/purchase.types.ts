export type Purchase = {
    id: string;
    createdAt: string;
    updatedAt: string;
    sellerId: string;
    buyerId: string;
    productId: string;
    purchasePriceAtTimeOfTransaction: number;
    rentPriceAtTimeOfTransaction: number;
    rentOptionAtTimeOfTransaction: string;
};
