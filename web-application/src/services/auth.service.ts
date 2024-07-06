import * as jwt from 'jsonwebtoken';
import { getUserByEmail } from "./user.service";

export const getAuthToken = async (email: string, password: string) => {

    const user = await getUserByEmail(email);

    if (!user) {
        return null;
    }

    if (user.password !== password) {
        return null;
    }

    const secretKey: string = process.env.AUTH_TOKEN_SECRET_KEY!;
    const authTokenLifespan = process.env.AUTH_TOKEN_LIFESPAN!;

    const token = jwt.sign({...user, password: null}, secretKey, { expiresIn: authTokenLifespan });

    return token;

};