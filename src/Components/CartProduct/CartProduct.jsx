import React,  { useEffect, useState } from 'react';
import ProductManager from '../../Services/ProductManager';
import './CartProduct.scss'
import Cart from '../Cart/Cart';
import { useCart } from '../../Features/cart/CartContext';

function CartProduct(props) {
  const { incrementFromCart, deleteFromCart, decrementFromCart } = useCart();

    const handleDecrement = () => {
      if (props.product.quantity > 1) {
        decrementFromCart(props.product.id);
      } else {
        deleteFromCart(props.product.id);
      }
    };
  
    const handleIncrement = () => {
      incrementFromCart(props.product.id);
    };

    const handleDelete = () => {
      deleteFromCart(props.product.id);
    }

    return (
        <div className="box">
                        <img className="image" src={props.product.images} /> 
                        <div className="descrip">
                        <p className="ptitrecart">
                        {props.product.name}
                        </p>
                        <p className="pprixcart">
                        {props.product.price * props.product.quantity}  €
                        </p>                
                    </div>
                    <div className="num-block skin-2">
                        <div className="num-in">
                        <button className="minus dis" data-id={props.product.id} onClick={handleDecrement}>
                        </button>
                        <input type="text" className="in-num" value={props.product.quantity} readOnly />
                        <button className="btn-add-cart plus" data-id={props.product.id} onClick={handleIncrement}>
                        </button>
                        </div>
                        <div><button className="del" data-id ={props.product.id} onClick={handleDelete}><i className="fa fa-trash-o"></i></button></div>
                        </div>
                    </div>
    )
}

export default CartProduct;