/* eslint-disable @typescript-eslint/no-explicit-any */
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FieldProps } from 'formik';
import { MenuItem } from '@mui/material';

interface MultiSelectDropdownProps {
    dropDownOptions: string[];
    label: string;
    placeHolder: string;
    [key: string]: string | number | string[] | any;
}

export default function SelectBasic(fieldProps: FieldProps<string> & MultiSelectDropdownProps) {

    return (
        <FormControl fullWidth>
            <InputLabel htmlFor={fieldProps.field.name}>{fieldProps.label}</InputLabel>
            <Select
                id={fieldProps.field.name}
                value={fieldProps.form.values[fieldProps.field.name] ?? ''}
                placeholder={fieldProps.placeHolder}
                label={fieldProps.label}
                onChange={(event) => fieldProps.form.setFieldValue(fieldProps.field.name, event.target.value)}
            >
                {fieldProps.dropDownOptions.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
