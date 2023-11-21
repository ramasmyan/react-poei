import React, { useState,useEffect } from 'react';
import './Cart.scss';
import { useCart } from '../../Features/cart/CartContext';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
  const { cartItems } = useCart();    
  const [delivery, setDelivery] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.map((cartItem) => {
      total = total + (cartItem.price * cartItem.quantity);
    })

    setSubTotal(total);
  }, [cartItems])

  useEffect(() => {
    if(subTotal > 499) {
      setDelivery(0);
    } else {
      setDelivery(50);
    }
  }, [subTotal])

  return (
    <div style={{ backgroundColor: '#F7F7F9' }}>
        <main>
      <section>
      <div>
    <div className="m-header-cart">
      <button className="a-goback-cart">
      </button>
      <h4 className="a-header-title">My Cart</h4>
    </div>      
      <div className="container-cart">
        <div className="row">
        <div className="col-md-6"  >
            <div className="boxcart">
            
                    {
                    cartItems.map((product) => (
                        <CartProduct
                        key={product.id}
                        product={product}
                        />         
                    ))}
            </div>           
                    
        </div>
        
        <div className="col-md-6" >
            <div className="boxcart">
            <div className="fature-price d-flex justify-content-between">
              <p className="ptitle1">Subtotal</p>
              <p className="priceF m-subtotal-right" >${subTotal}</p>
            </div>
            <div className="delivry d-flex justify-content-between">
              <p className="ptitle1">Delivery</p>
              <p className="priceF m-delivry-right">${delivery}</p>
            </div>
            <svg className="linefacture"  viewBox="18 0 300 2" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M1 1H336" stroke="#707B81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6" /></svg>
            <div className="total-facture d-flex justify-content-between">
              <p className="total-title">Total cost</p>
              <p className="total-price  m-total-right">${subTotal + delivery}</p>
            </div>
            <a href="/checkout.html" className="a-btn-link">
              <button className="d-grid gap-2 col-6 mx-auto btn btn-primary" type="button">Checkout</button>
            </a>
            </div>
          </div>
        </div>
      </div>
  </div>     

</section>
</main>
</div>
  );
};

export default Cart;
