import { jwtVerify, SignJWT } from 'jose';
import { getUserByEmail } from "./user.service";

export const getAuthToken = async (email: string, password: string) => {

    const user = await getUserByEmail(email);

    if (!user) {
        return null;
    }

    if (user.password !== password) {
        return null;
    }

    const secretKey = new TextEncoder().encode(process.env.AUTH_TOKEN_SECRET_KEY!);
    const authTokenLifespan = process.env.AUTH_TOKEN_LIFESPAN!;

    const token = await new SignJWT({...user, password: null})
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(authTokenLifespan)
        .sign(secretKey);

    return token;

};

export const verifyToken = async (token: string) => {

    try {
        const secretKey = new TextEncoder().encode(process.env.AUTH_TOKEN_SECRET_KEY!);
        await jwtVerify(token, secretKey);
        return true;
    } catch (error) {
        console.log(error);
    }

    return false;

};