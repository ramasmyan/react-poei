import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Home from '../Components/Home/Home';
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
    );
}

export default Homepage;