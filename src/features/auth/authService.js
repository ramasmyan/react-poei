import {createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = "/users"
const registerUser = async (registerForm)=>{
    try {
        const response = await fetch('/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: registerForm
            }
        )
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem('user',JSON.stringify(data.data));
            return data;
        }
    } catch (error) {
        return error;
    }
}


const AuthServices = {
    registerUser
}

export default AuthServices;