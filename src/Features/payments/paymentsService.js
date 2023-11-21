import axios from "axios";
const API_URL = "http://localhost:3000/orders"

const createOrder = async (orderForm)=>{
    const response =  await axios.post(`${API_URL}/create`,orderForm,
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "authorization" : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
        });
    const data = await response.data;
    if (response.status === 200) {
        return data.json();
    }else {
        return response;
    }
}

const getOrders = async ()=>{
    const response =  await axios.get(`${API_URL}/getOrders`,
        {
            headers: {
                'Content-Type': 'application/json',
                "authorization" : `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
        });
    const data = await response.data;
    if (response.status === 200) {
        return data.json();
    }else {
        return response;
    }
}

const OrderServices = {
    createOrder,
    getOrders
}
export default OrderServices;