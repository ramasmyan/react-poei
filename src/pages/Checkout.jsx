import React, {useEffect, useState} from 'react';
import DelivryInfo from "../Components/Checkout/DelivryInfo";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "../Components/Checkout/Stripe";
import Stripe from "../Components/Checkout/Stripe";
import {queries} from "@testing-library/react";

function Checkout(props) {
    const [message, setMessage] = useState("");
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [delivery, setDelivery] = useState(0)
    useEffect(() => {
        if (storedCart) {
            let total = 0
            let subtotal = 0
            let delivery = 0
            storedCart.forEach((item) => {
                subtotal += item.quantity * item.price
            })
            setSubtotal(subtotal)
            if (subtotal < 500 )  {
                delivery = 50
            }
            setDelivery(delivery)
            total = subtotal + delivery
            setTotal(total)
        }
    }, [storedCart])

    return (
        <div className="m-checkout-page   container">
            <div className="row container-fluid m-checkout-block ">
                <div className="col-md-6 container-fluid m-cont">
                    <DelivryInfo/>
                </div>
                <div className="col-md-6 container-fluid m-cont">
                        <div className=" ">
                                <div className="a-tatal"><p >Subtotal</p><span className="">{subtotal} €</span></div>
                                <div className="a-tatal"><p >Delivery</p><span className="">{delivery} €</span></div>
                                <div className="a-payment-line"></div>
                                <div className="a-tatal"><p ><strong>Total Cost</strong></p><strong><p className="m-total-right">{total} €</p></strong></div>
                                {message ? (
                                    <div>
                                        <p>{message}</p>
                                    </div>
                                ) : (
                                    <Stripe />
                                )}

                        </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;