import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../Features/products/productsService";
import Cart from '../Components/Cart/Cart'



function CartPage(props) {
    const productState = useSelector(state => state.products);
    const dispatch = useDispatch();
    const products = productState.data


    React.useEffect(() => {
        dispatch(getData());
    },[dispatch])

    return (
      <div className="container-cart">
        <Cart products={products}/>
      </div>
    );
}

export default CartPage;