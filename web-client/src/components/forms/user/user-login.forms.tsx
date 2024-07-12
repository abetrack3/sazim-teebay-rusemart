import { TextField, Button } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import { Form } from "react-router-dom";
import loginValidationSchema from "../../../validators/login.form.validation.schema";

type UserLoginFormProps = {
    errorMessage: string;
    handleLogin: (email: string, password: string) => Promise<void>;
};

export const LoginUserForm: React.FC<UserLoginFormProps> = ({ errorMessage, handleLogin }) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting }) => {

                handleLogin(values.email, values.password).finally(() => setSubmitting(false));
            }}
        >
            {({ isSubmitting, setSubmitting, submitForm }) => (
                <Form className="flex flex-col gap-4">

                    <Field name="email" as={TextField} label="Email" fullWidth />
                    <ErrorMessage name="email" component="div" />

                    <Field name="password" as={TextField} label="Password" type="password" fullWidth />
                    <ErrorMessage name="password" component="div" />

                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}

                    <Button type="submit" disabled={isSubmitting} variant="contained" color="primary" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        submitForm().finally(() => setSubmitting(false));
                    }}>
                        Log in
                    </Button>
                </Form>
            )}
        </Formik>
    );
};