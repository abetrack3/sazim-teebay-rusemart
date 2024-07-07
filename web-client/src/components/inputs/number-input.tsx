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
                    label={fieldProps.placeHolder}
                    onChange={event => fieldProps.form.setFieldValue(fieldProps.field.name, event.target.value)}
                />
            </FormControl>
        </>
    );
};

export default NumberInput;