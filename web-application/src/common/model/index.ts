import { User } from '@prisma/client';
export interface ApplicationContext {
    authenticatedUser?: User;
}

export interface ProductPurchaseParameter {
    sellerId: string;
    productId: string;
    purchasePriceAtTimeOfTransaction: number;
    rentPriceAtTimeOfTransaction: number;
    rentOptionAtTimeOfTransaction: string;
}

export interface ProductRentParameter {
    offererId: string;
    productId: string;
    toDateAsString: string;
    fromDateAsString: string;
    rentPriceAtTimeOfTransaction: number;
    rentOptionAtTimeOfTransaction: string;
}
