import { User } from './../shared/types/user.types';
import { decodeJwt } from "jose";

export const getDecodedToken = (token: string) => {
    try {
        const decoded = decodeJwt<User>(token);
        return decoded;
    } catch (error) {
        console.log('Error decoding token:', error);
        return null;
    }
}

export const isTokenExpired = (token: string) => {
    const decoded = getDecodedToken(token);
    if (!decoded || !decoded.exp) {
        return true; // Token is malformed or does not contain an exp field
    }
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;    
};
