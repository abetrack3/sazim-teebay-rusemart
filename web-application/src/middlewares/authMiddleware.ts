import { User } from "@prisma/client";
import { Request } from "express";
import { verifyToken } from '../services/auth.service';
import * as jwt from "jsonwebtoken";
import ApplicationContext from "../common/model";

export const authMiddleware = (request: Request): ApplicationContext => {

    const token = (request.headers.token || '') as string;
                
    if (!token) {
        return { authenticatedUser: undefined };
    }

    try {
        verifyToken(token);
        const authenticatedUser: User = jwt.decode(token) as User;
        return { authenticatedUser };
    } catch(error) {
        console.log(error);
    } 
    
    return { authenticatedUser: undefined };
                

};