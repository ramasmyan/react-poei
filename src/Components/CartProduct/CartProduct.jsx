import React,  { useState } from 'react';
import ProductManager from '../../Services/ProductManager';
import './CartProduct.scss'
import Cart from '../Cart/Cart';


function CartProduct(props) {

    const [quantity, setQuantity] = React.useState(1);
    const { id, name, price, image, onIncrement, onDecrement } = props;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onIncrement(id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onDecrement(id);
    }
  };
    
    return (
        <div className="box">
                        <img className="image" src={props.image} /> 
                        <div className="descrip">
                        <p className="ptitrecart">
                        {props.name}
                        </p>
                        <p className="pprixcart">
                        {parseInt(price)}  €
                        </p>                
                    </div>
                    <div className="num-block skin-2">
                        <div className="num-in">
                        <button className="minus dis" data-id={id} onClick={handleDecrement}>
                        </button>
                        <input type="text" className="in-num" value={quantity} readOnly />
                        <button className="btn-add-cart plus" data-id={id} onClick={handleIncrement}>
                        </button>
                        </div>
                        <div><button className="del" data-id ={props.id} ><i className="fa fa-trash-o"></i></button></div>
                        </div>
                    </div>
    )
}

export default CartProduct;