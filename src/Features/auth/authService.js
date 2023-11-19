import axios from "axios";

const proxy = "http://localhost:3000";

const API_URL = "/users"
const registerUser = async (registerForm)=>{
    console.log("proxy",proxy)
    const response =  await axios.post(`${proxy}${API_URL}/register`,registerForm);
    const data = await response.data;
    if (response.status === 201) {
        return data;
    }
}

const loginUser = async (loginForm)=>{
    const response =  await axios.post(`${proxy}${API_URL}/login`,loginForm);
    const data = await response.data;
    if (response.status === 200) {
        localStorage.setItem('user',JSON.stringify(data.data));
        return data;
    }
}
const logout = ()=>{
    localStorage.removeItem('user');
}


const AuthServices = {
    registerUser,
    loginUser,
    logout
}

export default AuthServices;