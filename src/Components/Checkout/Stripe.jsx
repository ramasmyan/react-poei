import React, { useState, useEffect } from "react";
import './chechout.scss';
import axios from "axios";

const Stripe = () => {

const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
const user = JSON.parse(localStorage.getItem('user'));

const onsubmit = async (e)=>{
    e.preventDefault();
    const data = {
        user: user,
        cart: cart
    }
   axios.post('http://localhost:3000/orders/create-checkout-session',
      data,
  {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "authorization": `Bearer ${localStorage.getItem('token')}`
      },
      action: 'http://localhost:3000/orders/create-checkout-session'
  }).then((response) => {
       console.log(response.data.data);
       window.location.href = response.data.data;
  }).catch((error) => {
        console.log(error);
   })
}

return (
    <section>
        <form  method="post" action="http://localhost:3000/orders/create-checkout-session" >
            <button type="submit" className="stripe-button" onClick={e=>onsubmit(e)}>
                Checkout
            </button>
        </form>
    </section>
);
}

export default Stripe;

