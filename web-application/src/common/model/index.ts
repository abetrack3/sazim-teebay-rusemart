import { User } from '@prisma/client';
export interface ApplicationContext {
    authenticatedUser?: User;
}

export interface ProductPurchaseParameter {
    sellerId: string;
    buyerId: string;
    productId: string;
    purchasePriceAtTimeOfTransaction: number;
    rentPriceAtTimeOfTransaction: number;
    rentOptionAtTimeOfTransaction: string
}
