import React, {useState} from 'react';
import { useForm} from 'react-hook-form';
import {useSelector, useDispatch} from "react-redux";
import {registerUser, reset} from "../features/auth/authSlice"
import "../assets/style/signin.scss"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
function SignIn() {
    const {register,handleSubmit} = useForm()
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
    const {user, isLoading , isSuccess , isError, message} = useSelector((state) => state.auth);

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const submit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password must be the same")
        } else {
            dispatch(registerUser(formData))
        }
    }
    return (
        <div>
            <h1>Sign In</h1>
            <form className="m-signin-form" method={"POST"} >
                 <section>
                     <label htmlFor="firstName">First Name
                         <input type="text" name="firstName" id="firstName" {...register("firstName")}/>
                     </label>
                     <label htmlFor="lastName">Last Name
                         <input type="text" name="lastName" id="lastName" {...register("lastName")}/>
                     </label>
                 </section>
                <section>
                    <label htmlFor="email">Email
                        <input type="email" name="email" id="email" {...register("email")}/>
                    </label>
                </section>
                <section>
                    <label htmlFor="password">Password
                        <input type="password" name="password" id="password" {...register("password")}/>
                    </label>
                    <label htmlFor="confirmpassword">Confirm Password
                        <input type="password" name="confirmpassword" id="confirmpassword" {...register("confirmpassword")}/>
                    </label>
                </section>

                <button type="submit" onClick={handleSubmit(submit)}>Submit</button>
            </form>
        </div>
    );
}

export default SignIn;