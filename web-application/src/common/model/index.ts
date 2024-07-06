import { User } from '@prisma/client';
export default interface ApplicationContext {
    authenticatedUser?: User;
}