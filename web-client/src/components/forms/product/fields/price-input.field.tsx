import { Field, FieldProps } from "formik"
import NumberInput from "../../../inputs/number-input"
import StyledErrorMessage from "../../styled-error-message";

export const PriceInputField: React.FC<{name: string, label: string, placeHolder: string}> = ({name, label, placeHolder}) => {

    return (
        <div className="flex flex-col w-full">
            <Field name={name} fullWidth>
                {({form, field, meta}: FieldProps) => (
                    <>
                        <NumberInput
                            name={name}
                            label={label}
                            placeHolder={placeHolder}
                            adornmentAtStart="$"
                            form={form}
                            field={field}
                            meta={meta}
                        />
                    </>
                )}
            </Field>
            <StyledErrorMessage name={name} />
        </div>
    )

};
