import { useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { logoutUser } from "../services/auth.service";

export const useLogout = () => {

    const navigate = useNavigate();

    const logout = useCallback(async () => {
        
        await logoutUser();
        navigate('/login');
        
    }, [navigate]);

    return logout;

};