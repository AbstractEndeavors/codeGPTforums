import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
export function ForumAppbar(props){
    const user = useSelector((state) => state.user);

    const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn);

    useEffect(() => {
        setIsLoggedIn(user.isLoggedIn);
    })

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Appwrite Forum
                </Typography>

                {isLoggedIn ? (
                    <Button component={Link} to="/logout" color="inherit">
                        Logout
                    </Button>
                ) : (
                    <Button component={Link} to="/login" color="inherit">
                        Login
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}
