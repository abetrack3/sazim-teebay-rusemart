import { Product } from "@prisma/client";
import prisma from "../utils/prisma.client";

export const createProduct = async (product: Product) => await prisma.product.create({ data: { ...product }});