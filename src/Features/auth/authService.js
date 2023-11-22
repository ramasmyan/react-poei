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
        return data;
    }
}
const logout = ()=>{
    localStorage.removeItem('user');
}

const updateProfile = async (updateForm)=>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if(user){
        const response =  await axios.put(`${API_URL}/${user._id}`,updateForm,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                }
            });
        const data = await response.data;
        if (response.status === 200) {
            const user = localStorage.getItem('user');
            const newUser = {...JSON.parse(user),...data.data};
            localStorage.setItem('user',JSON.stringify(newUser));
            return newUser;
        }
    }else {
        return new Error("User not found");
    }


}


const AuthServices = {
    registerUser,
    loginUser,
    logout,
    updateProfile
}

export default AuthServices;