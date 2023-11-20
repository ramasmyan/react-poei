import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Home from '../Components/Home/Home';
import {fetchAllProducts, reset} from "../Features/products/productsSlice";
import {toast} from "react-toastify";
import ProductComponent from "../Components/ProductComponent";
function Homepage() {

    return (
       <>
         <Home />
       </>

    );
}

export default Homepage;