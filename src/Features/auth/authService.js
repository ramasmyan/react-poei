import axios from "axios";
const API_URL = "http://62.72.18.39:3000/users"
const registerUser = async (registerForm)=>{
    const response =  await axios.post(`${API_URL}/register`,registerForm,
           {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
    const data = await response.data;
    if (response.status === 201) {
        return data;
    }
}

const loginUser = async (loginForm)=>{
    const response =  await axios.post(`${API_URL}/login`,loginForm,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
}
            );
    const data = await response.data;
    if (response.status === 200) {
        localStorage.setItem('user',JSON.stringify(data.data));
        console.log("data",localStorage)
        return data;
    }
}
const logout = ()=>{
    localStorage.removeItem('user');
}

const updateProfile = async (updateForm)=>{
    const user = JSON.parse(localStorage.getItem('user'));

    if(user) {
        const newUser = {...user}
        newUser.adress = [updateForm]
        console.log("user", newUser)
        const response = await axios.put(`${API_URL}/${user._id}`, newUser,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'authorization': `Bearer ${user.token}`
                }
            }
        );
        const data = await response.data;
        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(newUser));
            return data;
        }

    }
}


const AuthServices = {
    registerUser,
    loginUser,
    logout,
    updateProfile
}

export default AuthServices;