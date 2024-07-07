import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { isLoggedIn, logoutUser } from "../services/auth.service";

export const useAuthState = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    useEffect(() => setIsAuthenticated(isLoggedIn()), [])

    const logout = useCallback(async () => {
        
        await logoutUser();
        setIsAuthenticated(false);
        navigate('/login');
        
    }, [navigate]);

    return { logout, isAuthenticated };

};