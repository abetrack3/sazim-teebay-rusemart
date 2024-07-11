import { Field, FieldProps } from "formik"
import { CategoryList } from "../../../../shared/constants/categories.const"
import MultiSelectDropdownWithAutocomplete from "../../../inputs/multi-select-autocomplete"
import StyledErrorMessage from "../../styled-error-message";

const CategoriesInputField = () => {

    return (
        <>

            <Field name='categories' fullWidth>
                {({field, form, meta}: FieldProps) => (
                    <>
                        <MultiSelectDropdownWithAutocomplete
                            dropDownOptions={CategoryList}
                            label="Select Categories"
                            field={field}
                            form={form}
                            meta={meta}
                            placeHolder="Type your Categories"
                        />
                    </>
                    
                )}
            </Field>
            <StyledErrorMessage name='categories' />

        </>
    );

};

export default CategoriesInputField;