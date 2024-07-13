export type ProductRentals = {
    id: string;
    createdAt: string;
    updatedAt: string;
    rentedFromId: string;
    rentedToId: string;
    productId: string;
    rentTimelineStart: string;
    rentTimelineEnd: string;
    rentPriceAtTimeOfTransaction: number;
    rentOptionAtTimeOfTransaction: string;
}