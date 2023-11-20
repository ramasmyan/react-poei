import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../Features/products/productsService";
import Cart from '../Components/Cart/Cart'
import cartService from "../Services/CartService";



function CartPage(props) {
    const products = cartService.getCart()

    return (
      <div className="container">
        <Cart products={products}/>
      </div>
    );
}

export default CartPage;