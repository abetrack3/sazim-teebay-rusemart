import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {

    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default RequireAuth;
