
import { useForm} from 'react-hook-form';
import "../assets/style/signin.scss"
function Login() {
    const {register,handleSubmit} = useForm()


    const submit = async (data) => {
        console.log(data)
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'form-data'
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
    }
    return (
        <div>
            <h1>Login</h1>
            {/*create a form with firstName lastName email password confirmpassword  address zipcode city birthdate phone avatar*/}
            <form className="m-signin-form" method={"POST"} >
                <section>
                    <label htmlFor="email">Email
                        <input type="email" name="email" id="email" {...register("email")}/>
                    </label>
                </section>
                <section>
                    <label htmlFor="password">Password
                        <input type="password" name="password" id="password" {...register("password")}/>
                    </label>
                </section>
                <button type="submit" onClick={handleSubmit(submit)}>Submit</button>
            </form>
        </div>
    );
}

export default Login;