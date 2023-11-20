import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../Features/products/productsService";
import Cart from '../Components/Cart/Cart'
import cartService from "../Services/CartService";



function CartPage(props) {
    const products = cartService.getCart()

    return (
<<<<<<< HEAD
      <div className="container-cart">
=======
      <div className="container">
>>>>>>> 65a69b59ab924bbdd5cedbd71007b197e7234030
        <Cart products={products}/>
      </div>
    );
}

export default CartPage;