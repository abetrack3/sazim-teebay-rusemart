import { Field, FieldProps } from "formik";
import SelectBasic from "../../../ui/inputs/select-basic";
import { RentOptions } from "../../../../shared/constants/rent-option.const";
import StyledErrorMessage from "../../../ui/feedback/styled-error-message";

export const RentOptionInputField = () => {
    return (
        <>
            <Field name='rentOption' fullWidth>
                {({form, field, meta}: FieldProps) => (
                    <SelectBasic
                        dropDownOptions={RentOptions}
                        label="Rent Option"
                        placeHolder="Select Rent Option"
                        form={form}
                        field={field}
                        meta={meta}
                    />                    
                )}
            </Field>
            <StyledErrorMessage name="rentOption" />
        </>
    );
};
