import React, { useState,useEffect } from 'react';
import './Cart.scss';
import ProductManager from '../../Services/ProductManager';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
   
    const [products, setCartItems] = useState([]);
    
    const handleIncrement = (productId) => {
      setCartItems((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId ? { ...product, quantity: product.quantity + 1 } : product
        )
      );
    };
  
    const handleDecrement = (productId) => {
      setCartItems((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    };
    
  
    useEffect(() => {
        const fetchData = async () => {
            try {
              const productManager = new ProductManager();
              const result = await productManager.fetchProducts();
              setCartItems(result);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
  
      fetchData();
    }, []);

  // Function to calculate the total cost
// const calculateTotal = () => {
//     // Calculate subtotal and update state
// const newSubtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
//     setSubtotal(newSubtotal);
//   };


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
            
                    {products.map((product) => (
                        <CartProduct
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        image={product.images}
                        brand={product.brand}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        />         
                    ))}
            </div>           
                    
        </div>
        
        <div className="col-md-6" >
            <div className="boxcart">
            <div className="fature-price">
              <p className="ptitle1">Subtotal</p>
              <p className="priceF m-subtotal-right" ></p>
            </div>
            <div className="delivry">
              <p className="ptitle1">Delivery</p>
              <p className="priceF m-delivry-right"></p>
            </div>
            <svg className="linefacture"  viewBox="18 0 300 2" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M1 1H336" stroke="#707B81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 6" /></svg>
            <div className="total-facture">
              <p className="total-title">Total cost</p>
              <p className="total-price  m-total-right"></p>
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
