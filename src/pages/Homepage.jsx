import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../Features/products/productsService";
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