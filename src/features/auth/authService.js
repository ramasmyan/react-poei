import axios from "axios";
const API_URL = "http://localhost:3000/users";

const registerUser = async (registerForm)=>{
    const response =  await axios.post(`${API_URL}/register`,registerForm);
    const data = await response.data;
    if (response.status === 201) {
        return data;
    }
}

const loginUser = async (loginForm)=>{
    const response =  await axios.post(`${API_URL}/login`,loginForm);
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