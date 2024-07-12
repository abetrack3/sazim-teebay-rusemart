import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { UserSignupForm } from "../../components/forms/user/user-signup.forms";

const SignupPage = () => {

    return (
        <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-3xl mb-2">SIGN UP</h1>
            <Box
                component='section'
                borderRadius={2}
                border={2}
                minWidth={3 / 5}
                px={8}
                py={6}
            >
                <UserSignupForm />
            </Box>

            <div>
                <p>Already have an account? <span className="underline text-blue-500"><Link to='/login'>Sign in</Link></span></p>
            </div>
        </div>
    );

};

export default SignupPage;


