import { User } from "@prisma/client";
import { Request } from "express";
import { verifyToken } from '../services/auth.service';
import * as jwt from "jsonwebtoken";
import ApplicationContext from "../common/model";
import { GraphQLError } from "graphql";

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

export const requiresAuthenticatedUser = <T> (context: ApplicationContext, callback: MonoFunction<T>) => {

    if (!context.authenticatedUser) {
        throw new GraphQLError('User is not authenticated', {
            extensions: {
                code: 'Unautheticated',
                http: { status: 401 },
            },
        });
    }

    return callback();

};