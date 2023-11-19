import axios from "axios";

const proxy = "http://localhost:3000";
const API_URL = "/products"

const getProducts = async () => {
    const response = await axios.get(`${proxy}${API_URL}`);
    const data = await response.data;
    if (response.status === 200) {
        return data;
    }
}

export const ProductsServices = {
    getProducts,
}
export default ProductsServices;