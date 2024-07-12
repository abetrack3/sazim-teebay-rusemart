import { Product, Purchase } from "@prisma/client";
import prisma from "../utils/prisma.client"
import { getUserProductByIdAndOwnerId, updateProductByIdAndOwnerId } from "./product.service"
import { generateUUID } from "../utils/uuid";
import { Decimal } from "@prisma/client/runtime/library";
import { ProductPurchaseParameter } from "../common/model";

type purchaseProductHandlerType = (purchaseParams: ProductPurchaseParameter) => Promise<{ updatedProduct?: Product, newPurchase?: Purchase }>;

export const purchaseProduct: purchaseProductHandlerType = async ({
    sellerId,
    buyerId,
    productId,
    purchasePriceAtTimeOfTransaction,
    rentOptionAtTimeOfTransaction,
    rentPriceAtTimeOfTransaction }) => {

    const purchaseId: string = generateUUID();

    const queriedProduct = await getUserProductByIdAndOwnerId(productId, sellerId);

    if (!queriedProduct) {
        return {};
    }

    if (queriedProduct.ownerId === buyerId) {
        return {};
    }

    if (queriedProduct.isSold === true) {
        return {};
    }

    //TODO: check whether the product is in rental mode

    const partialProduct = {
        ownerId: buyerId,
        isSold: true,
        purchaseId: purchaseId,
    } as Product;

    const purchase = {
        id: purchaseId,
        sellerId: sellerId,
        buyerId: buyerId,
        productId: productId,
        purchasePriceAtTimeOfTransaction: new Decimal(purchasePriceAtTimeOfTransaction),
        rentPriceAtTimeOfTransaction: new Decimal(rentPriceAtTimeOfTransaction),
        rentOptionAtTimeOfTransaction: rentOptionAtTimeOfTransaction
    } as Purchase;

    const [newPurchase, updatedProduct] = await prisma.$transaction([
        prisma.purchase.create({ data: purchase }),
        updateProductByIdAndOwnerId(productId, partialProduct, sellerId),
    ]);

    return { updatedProduct, newPurchase };

}