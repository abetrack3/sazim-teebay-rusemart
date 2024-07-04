import * as yup from "yup";
import { userExistsByEmail } from "../../../api/user.api";

const signupValidationSchema = yup.object({

    firstName: yup
        .string()
        .required('First name is required'),

    lastName: yup
        .string()
        .required('Last name is required'),

    address: yup
        .string()
        .label('Enter your address')
        .optional(),

    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required')
        .test('checkEmailExists', 'Email already exists', async (value) => {
            if (!value) return false;
            const exists = await userExistsByEmail(value);
            return !exists;
        }),

    password: yup
        .string()
        .label('Type your password')
        .min(2, 'Password should be of minimum 8 characters length')
        .required('Password is required')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[@$!%*?&#]/, 'Password must contain at least one symbol'),

    retypePassword: yup
        .string()
        .required('Retype password is required')
        .oneOf([yup.ref('password')], 'Passwords must match')
});

export default signupValidationSchema;
