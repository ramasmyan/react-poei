import React, {useEffect, useState} from 'react';
import DelivryInfo from "../Components/Checkout/DelivryInfo";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "../Components/Checkout/Stripe";
import Stripe from "../Components/Checkout/Stripe";
import {queries} from "@testing-library/react";

function Checkout(props) {
    const [message, setMessage] = useState("");


    return (
        <div className="m-checkout-page   container">
            <div className="row container-fluid m-checkout-block ">

                <div className="col-md-6 container-fluid">
                    <DelivryInfo/>
                </div>
                <div className="col-md-6 container-fluid">

                        <div className="m-recap-command">
                        </div>
                        <div className="m-contact-information-form ">
                            <div className="payment-detail">
                                <section><p className="m-subtotal-left">Subtotal</p><span className="m-subtotal-right"></span></section>
                                <section><p className="m-delivry-left">Delivery</p><span className="m-delivry-right"></span></section>
                                <div className="a-payment-line"></div>
                                <section><p className="m-total-left"><strong>Total Cost</strong></p><strong><p className="m-total-right"></p></strong></section>
                                {message ? (
                                    <section>
                                        <p>{message}</p>
                                    </section>
                                ) : (
                                    <Stripe />
                                )}
                            </div>

                        </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;