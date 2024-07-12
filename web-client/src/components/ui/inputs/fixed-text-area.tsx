import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { FieldProps } from "formik";

export interface TextAreaProps {
    minRows: number;
    label: string;
    placeHolder: string;
    className: string;
}

const FixedTextArea = (fieldProps: FieldProps<string> & TextAreaProps) => {



    return (
        <>
            <FormControl fullWidth className="m-1">
                <InputLabel htmlFor={fieldProps.field.name}>{fieldProps.label}</InputLabel>
                <OutlinedInput
                    id={fieldProps.field.name}
                    value={fieldProps.form.values[fieldProps.field.name] ?? 0}
                    onTouchEnd={() => fieldProps.form.setFieldTouched(fieldProps.field.name)}
                    onChange={event => {
                        fieldProps.form.setFieldTouched(fieldProps.field.name);
                        fieldProps.form.setFieldValue(fieldProps.field.name, event.target.value);
                    }}
                    label={fieldProps.label}
                    placeholder={fieldProps.placeHolder}
                    multiline={true}
                    minRows={fieldProps.minRows}
                />
            </FormControl>
        </>
    );
};

export default FixedTextArea;