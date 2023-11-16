import {useState} from "react";
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
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const onSubmit = (data) => {
        console.log(data)
    }



        
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