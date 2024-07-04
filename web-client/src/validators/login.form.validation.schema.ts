import * as yup from "yup";

const loginValidationSchema = yup.object({

    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),

    password: yup
        .string()
        .label('Type your password'),

});

export default loginValidationSchema;
