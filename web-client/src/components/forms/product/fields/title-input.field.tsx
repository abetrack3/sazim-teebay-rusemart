import { TextField } from "@mui/material"
import { Field } from "formik"
import StyledErrorMessage from "../../../ui/feedback/styled-error-message";

const ProductTitleInput = () => {

    return (
        <>
            <Field name="title" as={TextField} label="Title" fullWidth />
            <StyledErrorMessage name="title" />
        </>
    );

};

export default ProductTitleInput;