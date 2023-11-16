import "../assets/style/signin.scss"
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { logoutUser, reset} from "../features/auth/authSlice";
function Logout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let {user ,isSuccess, isError, message} = useSelector((state) => state.auth);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success("User disconnected")
            navigate("/")
            dispatch(reset())
        }
        if (isError) {
            toast.error(message)
            dispatch(reset())
        }
    }, [isSuccess, isError, message, navigate,dispatch]);

    if (user !== null) {
        return (
            <div>
                <h1>logout</h1>
                <form className="m-signin-form" method={"POST"} >
                    <button type="submit" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        );
    }

}

export default Logout;