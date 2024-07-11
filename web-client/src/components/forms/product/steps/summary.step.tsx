import { Typography } from "@mui/material";
import { Field, FieldProps } from "formik";
import { StepWrapper } from "./step-wrapper";

export const SummaryStep = () => {
    return (
        <StepWrapper stepHeaderText="Select price" >
            <Field>
                {(fieldProps: FieldProps) => {

                    return (
                        <>
                            <Typography component="p" marginBottom={3}>
                                {`Title: ${fieldProps.form.values.title}`}
                            </Typography>

                            <Typography component="p" marginBottom={3}>
                                {`Categories: ${fieldProps.form.values.categories.join(', ')}`}
                            </Typography>

                            <Typography component="p" marginBottom={3}>
                                {`Description: ${fieldProps.form.values.description}`}
                            </Typography>

                            <Typography component="p" marginBottom={3}>
                                {`Price: $${fieldProps.form.values.purchasePrice}, To rent: $${fieldProps.form.values.rentPrice} per day`}
                            </Typography>
                        </>
                    );

                }}
            </Field>

        </StepWrapper>
    )
};
