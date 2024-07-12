import { User } from '@prisma/client';
export interface ApplicationContext {
    authenticatedUser?: User;
}