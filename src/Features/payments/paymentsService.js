import axios from "axios";
const API_URL = "http://62.72.18.39:3000/orders"

const createOrder = async (orderForm)=>{
    const response =  await axios.post(`${API_URL}`,orderForm,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "authorization" : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            },

        });
    const data = await response.data;
    if (response.status === 200) {
        return data.data;
    }
}

const getOrders = async ()=>{
    const response =  await axios.get(`${API_URL}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "authorization" : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
        });
    const data = await response.data;
    if (response.status === 200) {
        return await data;
    }else {
        return response;
    }
}

const OrderServices = {
    createOrder,
    getOrders
}
export default OrderServices;