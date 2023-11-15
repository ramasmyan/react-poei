import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {registerUser, reset} from "../features/auth/authSlice"
import "../assets/style/signin.scss"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
function SignIn() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const {firstName, lastName, email, password, confirmPassword} = formData;
    const navigate = useNavigate();
    let { isSuccess , isError, message} = useSelector((state) => state.auth);

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log(formData)
    }
    const submit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword && formData.password !== "" ) {
            toast.error("Password and Confirm Password must be the same")
        } else {
            dispatch(registerUser(formData))
        }
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success("User created")
            navigate("/login")
            dispatch(reset())
        }
        if (isError) {
            toast.error(message)
            dispatch(reset())
        }
    }, [isSuccess, isError, message, dispatch, navigate]);
    return (
        <div>
            <h1>Sign In</h1>
            <form className="m-signin-form" method={"POST"} >
                 <section>
                     <label htmlFor="firstName">First Name
                         <input type="text" name="firstName" id="firstName" value={firstName} onChange={onChange}/>
                     </label>
                     <label htmlFor="lastName">Last Name
                         <input type="text" name="lastName" id="lastName" value={lastName} onChange={onChange}/>
                     </label>
                 </section>
                <section>
                    <label htmlFor="email">Email
                        <input type="email" name="email" id="email" value={email} onChange={onChange}/>
                    </label>
                </section>
                <section>
                    <label htmlFor="password">Password
                        <input type="password" name="password" id="password" value={password} onChange={onChange}/>
                    </label>
                    <label htmlFor="confirmPassword">Confirm Password
                        <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={onChange}/>
                    </label>
                </section>

                <button type="submit" onClick={submit}>Submit</button>
            </form>
        </div>
    );
}

export default SignIn;