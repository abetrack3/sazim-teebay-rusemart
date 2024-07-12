/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, TextField } from "@mui/material"
import { FieldProps } from "formik";

interface MultiSelectDropdownProps {
    dropDownOptions: string[];
    label: string;
    placeHolder: string;
    [key: string]: string | number | string[] | any;
}

const MultiSelectDropdownWithAutocomplete = (fieldProps: FieldProps<string> & MultiSelectDropdownProps) => {
    return (
        <Autocomplete
            multiple
            options={fieldProps.dropDownOptions}
            getOptionLabel={(option) => option as string}
            filterSelectedOptions
            value={fieldProps.form.values[fieldProps.field.name] ?? []}
            onChange={(_, value) => {
                fieldProps.form.setFieldTouched(fieldProps.field.name);
                fieldProps.form.setFieldValue(fieldProps.field.name, value);
            }}
            onOpen={() => fieldProps.form.setFieldTouched(fieldProps.field.name)}
            renderInput={(params) => (
            <TextField
                {...params}
                label={fieldProps.label}
                placeholder={fieldProps.placeHolder}
            />
            )}
        />
    );
};

export default MultiSelectDropdownWithAutocomplete;