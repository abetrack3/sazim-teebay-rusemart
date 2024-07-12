import { FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import { FieldProps } from "formik";

export interface NumberInputProps {
    name: string;
    label: string;
    placeHolder: string;
    adornmentAtStart: string;
}

const NumberInput = (fieldProps: FieldProps<number> & NumberInputProps) => {

    

    return (
        <>
            <FormControl fullWidth className="m-1">
                <InputLabel htmlFor={fieldProps.field.name}>{fieldProps.label}</InputLabel>
                <OutlinedInput
                    type="number"
                    id={fieldProps.field.name}
                    value={fieldProps.form.values[fieldProps.field.name] ?? 0}
                    startAdornment={
                        fieldProps.adornmentAtStart ?
                        (<InputAdornment position="start">{fieldProps.adornmentAtStart}</InputAdornment>)
                        : (<></>)
                    }
                    label={fieldProps.label}
                    placeholder={fieldProps.placeHolder}
                    onTouchEnd={() => fieldProps.form.setFieldTouched(fieldProps.field.name)}
                    onChange={event => {
                        fieldProps.form.setFieldTouched(fieldProps.field.name);
                        const parsedValue = parseFloat(event.target.value);
                        if (parsedValue.toString() === 'NaN') {
                            fieldProps.form.setFieldValue(fieldProps.field.name, 0);
                            fieldProps.form.setFieldError(fieldProps.field.name, `${fieldProps.label} must be a 'number' type`)
                        } else {
                            fieldProps.form.setFieldValue(fieldProps.field.name, parsedValue);
                        }
                    }}
                />
            </FormControl>
        </>
    );
};

export default NumberInput;