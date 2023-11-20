
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { loginUser, reset } from "../Features/auth/authSlice";
import "../Assets/style/login.scss";

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

        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                        <div className="card bg-white text-dark" ><div className="card-body p-5 ">
                            <div className="mb-md-2 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-3 text-uppercase text-center">Login</h2>
                                <p className="text-dark-50 mb-4 text-center">Please enter your login and password!</p>
                                <div className="form-outline form-white mb-2">
                                    <label htmlFor="email" className="form-label">Email </label>
                                    <input type="email" name="email" id="email" value={email} onChange={onChange} className="form-control form-control-lg"/>
                                </div>
                                <div className="form-outline form-white mb-2">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" id="password" value={password} onChange={onChange} className="form-control form-control-lg"/>
                                </div>
                                <p className="small mb-5 pb-lg-2"><a className="text-dark-50" href="#!">Forgot password?</a></p>
                                <div className="text-center">
                                    <button type="submit" onClick={onSubmit} className="btn btn-outline-primary btn-lg px-5">Submit</button>
                                </div>
                            </div>

                            <div className="text-center mb-4">
                                <p className="mb-0">Don't have an account?</p><button className="btn btn-primary mr-5"><Link to="/register"  className="custom-link">Sign Up</Link></button>
                            </div>

                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;