import { Product, ProductRentals } from "@prisma/client";
import { ProductRentParameter } from "../common/model";
import prisma from "../utils/prisma.client";
import { getUserProductByIdAndOwnerId } from "./product.service";

export const getRentTimelineOverlapExist = async (productId: string, fromDateAsString: string, toDateAsString: string) => {

    const startDate = new Date(fromDateAsString);
    const endDate = new Date(toDateAsString);

    const overlappingRental = await prisma.productRentals.findFirst({
        where: {
            productId: productId,
            AND: [
                {
                    rentTimelineEnd: {
                        gte: startDate, // Overlaps if the rental ends after the start date
                    },
                },
                {
                    rentTimelineStart: {
                        lte: endDate, // Overlaps if the rental starts before the end date
                    },
                }, 
            ]
        }
    });

    return !!overlappingRental;

};

type RentProductHandlerType = (borrowerId: string, rentParams: ProductRentParameter) => Promise<ProductRentals | null>;

export const rentProduct: RentProductHandlerType = async (borrowerId: string, {offererId, productId, fromDateAsString, toDateAsString}) => {

    const queriedProduct = await getUserProductByIdAndOwnerId(productId, offererId);

    if (!queriedProduct) {
        return null;
    }

    if (queriedProduct.ownerId === borrowerId) {
        return null;
    }

    if (queriedProduct.isSold === true) {
        return null;
    }

    const isOverlapping = await getRentTimelineOverlapExist(productId, fromDateAsString, toDateAsString);

    if (isOverlapping) {
        return null;
    }

    const rental = {
        rentedFromId: offererId,
        rentedToId: borrowerId,
        productId: productId,
        rentTimelineStart: new Date(fromDateAsString),
        rentTimelineEnd: new Date(toDateAsString),
        rentPriceAtTimeOfTransaction: queriedProduct.rentPrice,
        rentOptionAtTimeOfTransaction: queriedProduct.rentOption,
    } as ProductRentals;

    const result: ProductRentals = await prisma.productRentals.create({ data: rental });

    return result;

};

export const getUserProductsWithRentalRecords = async (userId: string, rentalRecordType: 'borrowed' | 'offered') => {

    const filter = rentalRecordType === 'borrowed' ? { rentedToId: userId } : { rentedFromId : userId };

    const userRentalRecords = await prisma.productRentals.findMany({
        where: filter,
        include: {
            product: true,
        },
    });

    const products: Product[] = userRentalRecords.map(rental => rental.product);

    return products;

}

export const getUserBorrowedProducts = async (userId: string) => getUserProductsWithRentalRecords(userId, 'borrowed');

export const getUserOfferedProducts = async (userId: string) => getUserProductsWithRentalRecords(userId, 'offered');
