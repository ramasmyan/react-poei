import React, { useState, useEffect } from "react";
import './chechout.scss';

const Stripe = () => (
    <section>
        <form action="http://localhost:3000/create-checkout-session" method="POST">
            <button type="submit" className="stripe-button">
                Checkout
            </button>
        </form>
    </section>
);

export default Stripe;

