import axios from "axios";

const proxy = "http://localhost:3000";
const API_URL = "/users"
const registerUser = async (registerForm)=>{
    const response =  await axios.post(`${proxy}${API_URL}/register`,registerForm);
    const data = await response.data;
    if (response.status === 201) {
        localStorage.setItem('user',JSON.stringify(data.data));
        return data;
    }
}


const AuthServices = {
    registerUser
}

export default AuthServices;