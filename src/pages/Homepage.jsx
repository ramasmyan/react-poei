import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Home from '../Components/Home/Home';
import {fetchAllProducts, reset} from "../Features/products/productsSlice";
import {toast} from "react-toastify";



function Homepage(props) {
    const {data,isSuccess} = useSelector(state => state.products);
    const dispatch = useDispatch();
         dispatch(fetchAllProducts());
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data)
    }, []);


    return (
        <Home products={products}/>
    );
}

export default Homepage;