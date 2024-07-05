import { Box, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../../services/user.service';
import signupValidationSchema from "../../validators/signup.form.validation.schema";



const SignupPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-3xl mb-2">SIGN UP</h1>
            <Box
                component='section'
                borderRadius={2}
                border={2}
                minWidth={3 / 5}
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
                    onSubmit={async (values) => {
                        console.log(values);
                        await createUser(values.email, values.firstName, values.lastName, values.address, values.password);
                        navigate('/login');
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

