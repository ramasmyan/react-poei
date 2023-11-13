import React from 'react';
import { useForm} from 'react-hook-form';
import "../assets/style/signin.scss"
function SignIn() {
    const {register,handleSubmit} = useForm()


    const submit = async (userData) => {
        await (2000)
        try {
            const response = await fetch("/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: userData,
            });
            const responseData = await response.json();
            if (!response.ok) {
                console.log(responseData)
            }
            return responseData;
        } catch (error) {
            console.log(error)
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