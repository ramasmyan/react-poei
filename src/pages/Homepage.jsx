import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Home from '../Components/Home/Home';
<<<<<<< HEAD
function Homepage(props) {
    const productState = useSelector(state => state.products);
    const dispatch = useDispatch();
    const products = productState.data


    React.useEffect(() => {
        dispatch(getData());
    },[dispatch])

    return (
        <div className="container">
            <Home products={products}/>
        </div>
=======
import {fetchAllProducts, reset} from "../Features/products/productsSlice";
import {toast} from "react-toastify";
import ProductComponent from "../Components/ProductComponent";
function Homepage() {

    return (
       <>
         <Home />
       </>

>>>>>>> 65a69b59ab924bbdd5cedbd71007b197e7234030
    );
}

export default Homepage;