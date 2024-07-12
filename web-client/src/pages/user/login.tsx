import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getAuthToken } from "../../services/auth.service";
import { useState } from "react";
import { LoginUserForm } from "../../components/forms/user/user-login.forms";


const LoginPage = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = async (email: string, password: string) => {

        const token: string = await getAuthToken(email, password);

        if (token === '') {
            setErrorMessage('Invalid Email or password');
            return;
        }

        localStorage.setItem('token', token);
        setErrorMessage('');
        navigate('/my-product');

    };

    return (
        <div className="flex flex-col h-full justify-center items-center">
            <h1 className="text-3xl mb-2">LOG IN</h1>
            <Box
                component='section'
                borderRadius={2}
                border={2}
                minWidth={3 / 5}
                px={8}
                py={6}
            >
                <LoginUserForm errorMessage={errorMessage} handleLogin={handleLogin} />

            </Box>

            <div>
                <p>Don't have an account? <span className="underline text-blue-500"><Link to='/signup'>Sign up</Link></span></p>
            </div>
        </div>
    );

};

export default LoginPage;

