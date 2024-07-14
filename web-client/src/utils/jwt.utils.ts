import { User } from './../shared/types/user.types';
import { decodeJwt } from "jose";

export const isTokenExpired = (token: string) => {
    try {
        const decoded = decodeJwt<User>(token);
        if (!decoded || !decoded.exp) {
            return true; // Token is malformed or does not contain an exp field
        }
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true; // If there's an error decoding, consider the token expired
    }
}