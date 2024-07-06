import { Product } from "@prisma/client";
import prisma from "../utils/prisma.client";

export const createProduct = async (product: Product) => await prisma.product.create({ data: { ...product }});
export const getAllProductsByOwnerId = async (ownerId: number) => await prisma.product.findMany({ where: { ownerId }});
export const deleteProductById = async (id: number, ownerId: number) => await prisma.product.delete({where: { id, ownerId }})