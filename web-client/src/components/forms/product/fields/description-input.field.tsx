import { Field, FieldProps } from "formik";
import FixedTextArea from "../../../inputs/fixed-text-area";
import StyledErrorMessage from "../../styled-error-message";

export const DescriptionInputField = () => {
    return (
        <>
            <Field name='description' fullWidth>
                {({field, form, meta}: FieldProps) => (
                    <>
                        <FixedTextArea
                            minRows={4}
                            placeHolder="Description"
                            field={field}
                            form={form}
                            meta={meta}
                            className="w-full"
                        />
                    </>
                )}
            </Field>
            <StyledErrorMessage name='description' />
        </>
    );
};