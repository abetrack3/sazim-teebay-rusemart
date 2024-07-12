import styled from "@emotion/styled";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { FieldProps } from "formik";


export interface TextAreaProps {
    minRows: number;
    placeHolder: string;
    className: string;
}

const FixedTextArea = (fieldProps: FieldProps<string> & TextAreaProps) => {

    

    return (
        <>
            <TextareaAutosize
                {...fieldProps.form}
                {...fieldProps.field}
                minRows={fieldProps.minRows}
                placeholder={fieldProps.placeHolder}
                onChange={fieldProps.form.handleChange}
            />
        </>
    );
};

const blue = {
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
};

const grey = {
    50: '#F3F6F9',
    200: '#DAE2ED',
    900: '#1C2025',
};

const TextareaAutosize = styled(BaseTextareaAutosize)(() => `
    box-sizing: border-box;
    width: 100%;
    resize: none;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${grey[900]};
    background: ${'#fff'};
    border: 1px solid ${grey[200]};
    box-shadow: 0px 2px 2px ${grey[50]};

    &:hover {
        border-color: ${blue[400]};
    }

    &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${blue[200]};
    }

    // firefox
    &:focus-visible {
        outline: 0;
    }
`,
);

export default FixedTextArea;