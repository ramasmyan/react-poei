import "../assets/style/signin.scss"
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {loginUser, reset} from "../features/auth/authSlice";
import { useForm} from 'react-hook-form';
import "../Assets/style/signin.scss";

function Login() {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
        }
    );
    const {email, password} = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let {user,isSuccess, isError, message} = useSelector((state) => state.auth);
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData))
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success("Welcome back " + user.firstName )
            navigate("/")
            dispatch(reset())
        }
        if (isError) {
            toast.error(message)
            dispatch(reset())
        }
    }, [isSuccess, isError, message, navigate,dispatch, user]);

        
    return (
        <div>
            <h1>Login</h1>
            {/*create a form with firstName lastName email password confirmpassword  address zipcode city birthdate phone avatar*/}
            <form className="m-signin-form" method={"POST"} >
                <section>
                    <label htmlFor="email">Email
                        <input type="email" name="email" id="email" value={email} onChange={onChange} />
                    </label>
                </section>
                <section>
                    <label htmlFor="password">Password
                        <input type="password" name="password" id="password" value={password} onChange={onChange}/>
                    </label>
                </section>
                <button type="submit" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Login;