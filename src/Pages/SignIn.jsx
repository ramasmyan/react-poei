import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {registerUser, reset} from "../Features/auth/authSlice"
import "../Assets/style/signin.scss"
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
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                            <div className="card bg-white text-dark" ><div className="card-body ">
                                <div className="mb-md-2 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase text-center">Login</h2>
                                    <div className="form-outline form-white mb-2">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" name="firstName" id="firstName" value={firstName} onChange={onChange} className="form-control form-control-lg"/>
                                        <label htmlFor="lastName">Last Name </label>
                                        <input type="text" name="lastName" id="lastName" value={lastName} onChange={onChange} className="form-control form-control-lg"/>
                                    </div>
                                    <div className="form-outline form-white mb-5">
                                        <label htmlFor="email">Email </label>
                                        <input type="email" name="email" id="email" value={email} onChange={onChange} className="form-control form-control-lg"/>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" value={password} onChange={onChange}  className="form-control form-control-lg"/>
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={onChange} className="form-control form-control-lg"/>
                                    </div>
                                    <div className="form-outline form-white text-center">
                                        <button type="submit" onClick={submit} className="btn btn-outline-primary btn-lg px-4 ">Submit</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignIn;