import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {logout} from "../../../Slices/userSlice";

export function Logout(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout())
        navigate('/');
    }, []);

    return <></>
}
