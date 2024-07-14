import { Product } from "@prisma/client";
import prisma from "../utils/prisma.client";

export const createProduct = async (ownerId: string, product: Product) => {
    return await prisma.product.create({ data: { ...product, ownerId }});
};

export const getAllProductsByOwnerId = async (ownerId: string) => {
    return await prisma.product.findMany({ where: { ownerId, isSold: false }});
};

export const getUserProductByIdAndOwnerId = async (id: string, ownerId: string) => {
    return await prisma.product.findFirst({ where: { id, ownerId }});
};

export const deleteProductById = async (id: string, ownerId: string) => {
    return await prisma.product.delete({where: { id, ownerId }});
};

export const getAllMarketAvailableProducts = async () => {
    return await prisma.product.findMany();
};

export const updateProductByIdAndOwnerId = (id: string, product: Product, ownerId: string) => {
    return prisma.product.update({ where: { id, ownerId }, data: { ...product }})
};

export const getMarketplaceProductById = async (id: string) => {
    return await prisma.product.findFirst({ where: { id }});
};
