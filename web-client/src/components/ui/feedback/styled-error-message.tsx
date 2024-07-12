import { ErrorMessage } from "formik";

const StyledErrorMessage: React.FC<{name: string}> = ({ name }) => {

    return (
        <ErrorMessage name={name} >
            {errorMessage => <div className="mt-2 text-red-500">{errorMessage}</div>}
        </ErrorMessage>
    );

}

export default StyledErrorMessage;