import * as jwt from 'jsonwebtoken';
import { getUserCredentialByEmail } from "./user.service";

export const getAuthToken = async (email: string, password: string) => {

    const credential = await getUserCredentialByEmail(email);

    if (credential === null || credential === undefined) {
        return null;
    }

    if (credential.password !== password) {
        return null;
    }

    const secretKey: string = process.env.AUTH_TOKEN_SECRET_KEY!;

    const token = jwt.sign({email: email}, secretKey, { expiresIn: '7m'});

    return token;

};