// components/RequireAuth.jsx
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../../hooks/useAuthState.hook';
import { ReactNode, useEffect } from 'react';

const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { isAuthenticated } = useAuthState();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return children;
};

export default RequireAuth;
