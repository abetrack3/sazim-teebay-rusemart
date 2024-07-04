import { Box, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

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
        .required('Email is required'),
        // .test('checkEmailExists', 'Email already exists', async (value) => {
        //     // Assuming checkEmailExists is a function that checks if the email exists
        //     const response = await fetch(`/api/check-email?email=${value}`);
        //     const data = await response.json();
        //     return data.exists === false;
        //   }),
    
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

const SignupPage = () => {

    return (
        <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-3xl mb-2">SIGN UP</h1>
            <Box
                component='section'
                borderRadius={2}
                border={2}
                minWidth={3/5}
                px={8}
                py={6}
            >
                <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    address: '',
                    email: '',
                    password: '',
                    retypePassword: '',
                }}
                validationSchema={signupValidationSchema}
                onSubmit={(values) => {
                    // Handle form submission
                    console.log(values);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4">
                        <Field name="firstName" as={TextField} label="First Name" fullWidth />
                        <ErrorMessage name="firstName" component="div" />

                        <Field name="lastName" as={TextField} label="Last Name" fullWidth />
                        <ErrorMessage name="lastName" component="div" />

                        <Field name="address" as={TextField} label="Address" fullWidth />
                        <ErrorMessage name="address" component="div" />

                        <Field name="email" as={TextField} label="Email" fullWidth />
                        <ErrorMessage name="email" component="div" />

                        <Field name="password" as={TextField} label="Password" type="password" fullWidth />
                        <ErrorMessage name="password" component="div" />

                        <Field name="retypePassword" as={TextField} label="Retype Password" type="password" fullWidth />
                        <ErrorMessage name="retypePassword" component="div" />

                        <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                            Sign Up
                        </Button>
                    </Form>
                )}
                </Formik>

            </Box>

            <div>
                <p>Already have an account? <span className="underline text-blue-500"><Link to='/login'>Sign in</Link></span></p>
            </div>
        </div>
    );

};

export default SignupPage;

