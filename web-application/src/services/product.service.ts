import { Product } from "@prisma/client";
import prisma from "../utils/prisma.client";

export const createProduct = async (ownerId: string, product: Product) => await prisma.product.create({ data: { ...product, ownerId }});
export const getAllProductsByOwnerId = async (ownerId: string) => await prisma.product.findMany({ where: { ownerId }});
export const deleteProductById = async (id: string, ownerId: string) => await prisma.product.delete({where: { id, ownerId }});
export const getAllMarketAvailableProducts = async () => await prisma.product.findMany();
