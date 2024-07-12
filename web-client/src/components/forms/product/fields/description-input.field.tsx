import { Field, FieldProps } from "formik";
import FixedTextArea from "../../../ui/inputs/fixed-text-area";
import StyledErrorMessage from "../../../ui/feedback/styled-error-message";

export const DescriptionInputField = () => {
    return (
        <>
            <Field name='description' fullWidth>
                {({field, form, meta}: FieldProps) => (
                    <>
                        <FixedTextArea
                            minRows={4}
                            label="Description"
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