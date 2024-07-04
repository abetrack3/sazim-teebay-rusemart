import { Box, Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import loginValidationSchema from "../../validators/login.form.validation.schema";


const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-3xl mb-2">LOG IN</h1>
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
                        email: '',
                        password: '',
                    }}
                    validationSchema={loginValidationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        // await createUser(values.email, values.firstName, values.lastName, values.address, values.password);
                        navigate('/');
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-4">
                            
                            <Field name="email" as={TextField} label="Email" fullWidth />
                            <ErrorMessage name="email" component="div" />

                            <Field name="password" as={TextField} label="Password" type="password" fullWidth />
                            <ErrorMessage name="password" component="div" />

                            <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                                Log in
                            </Button>
                        </Form>
                    )}
                </Formik>

            </Box>

            <div>
                <p>Don't have an account? <span className="underline text-blue-500"><Link to='/signup'>Sign up</Link></span></p>
            </div>
        </div>
    );

};

export default LoginPage;

