import { MenuTwoTone } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { useAuthState } from "../../hooks/useAuthState.hook";
import { useNavigate } from "react-router-dom";

export const TopNavBar = () => {

    const { isAuthenticated, logout } = useAuthState();
    const navigate = useNavigate();

    return (
        <>
            <AppBar position="sticky" color="transparent">
                <Toolbar>
                    <div className="w-full grid grid-cols-5">
                        <div className="flex justify-center gap-4 col-start-2 col-span-3">
                            <Button sx={{ color: 'primary', display: 'block'}} onClick={() => navigate('/')}>
                                Marketplace
                            </Button>
                            {isAuthenticated && <>
                                <Button sx={{ color: 'primary', display: 'block'}} onClick={() => navigate('/my-product')}>
                                    My Products
                                </Button>
                                <Button sx={{ color: 'primary', display: 'block'}} onClick={() => navigate('/my-activity')}>
                                    My Activity
                                </Button>
                            </>}
                        </div>

                        <div className="col-start-5 flex justify-end">
                            {isAuthenticated === true &&
                            <Button type='button' variant='contained' color="error" onClick={logout}>
                                Logout
                            </Button>}

                            {isAuthenticated === false &&
                            <Button type='button' variant='contained' color="primary" onClick={() => navigate('/login')}>
                                Sign In
                            </Button>}
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

        </>
    );
};