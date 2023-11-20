import React, {useEffect, useRef, useState} from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import cartService from "../../Services/CartService";

const NavBar = () => {
    const cart = cartService
    const [cartItems, setCartItems] = useState(null);
    const [cartPrice, setCartPrice] = useState(null);
    const [cartQuantity, setCartQuantity] = useState(null);
  const ref = useRef(JSON.parse(localStorage.getItem('cart')));
  useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cart')));
        setCartPrice(cart.getAllPrice());
        setCartQuantity(cart.getAllQuantity())
    }, [ref]);
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h1 className="a-h1-logo">Eco<span style={{ color: '#0D6EFD' }}>Step</span></h1>
          <svg className="img" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.02255 17.7307C4.30381 17.266 2.50435 17.0316 0.758754 16.8169C0.382779 16.7718 0.0337127 17.0231 0.0068574 17.377C-0.0468532 17.7312 0.221857 18.0552 0.570976 18.1002C2.26286 18.3069 4.0083 18.5282 5.64647 18.9755C5.99559 19.0725 6.37172 18.8728 6.47914 18.5292C6.58657 18.1858 6.37167 17.828 6.02255 17.7307Z" fill="#2B2B2B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.2325 11.1425C8.46638 8.42288 5.35116 6.05336 2.63878 3.2608C2.39708 3 1.96739 2.98602 1.69884 3.2295C1.43029 3.47323 1.40354 3.88307 1.67209 4.14387C4.38448 6.94445 7.49969 9.32173 10.2658 12.0493C10.5343 12.3039 10.9639 12.3076 11.2325 12.0571C11.4742 11.8069 11.501 11.3971 11.2325 11.1425Z" fill="#2B2B2B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.4156 0.68197C16.4962 2.23854 16.5766 3.7951 16.6571 5.35192C16.6571 5.70846 16.9796 5.98376 17.3555 5.96643C17.7315 5.94883 17.9999 5.64533 17.9999 5.28853C17.9193 3.72938 17.8389 2.17049 17.7584 0.611593C17.7315 0.255052 17.4092 -0.0184333 17.0332 0.000972033C16.6841 0.0203774 16.3888 0.325689 16.4156 0.68197Z" fill="#2B2B2B" />
          </svg>
        </a>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row text-right align-items-baseline" id="navbar-desktop">
            <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >
            Products
            </Link>              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Wishlist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Account</a>
            </li>

            <li className="nav-item dropdown position-relative">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cart
                <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{cartQuantity}</span>
              </a>

              <ul className="dropdown-menu shopping-cart box-background dropdown-cart-fullscreen">
                <div className="shopping-cart">
                  <div className="shopping-cart-header">
                    <i className="fa fa-shopping-cart cart-icon"></i><span className="badge"></span>
                    <div className="shopping-cart-total">
                      <span className="lighter-text">Total:</span>
                      <span className="main-color-text total-cart">{cartPrice}</span>
                    </div>
                  </div>
                  <div>
                    <ul className="shopping-cart-items">
                      {cartItems ? cartItems.map((product) => (
                          <li className="clearfix">
                            <img src={product.images} alt="item1" />
                            <span className="item-name">{product.name}</span>
                            <span className="item-price">${product.price}</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                      )): <p>cart is empty</p>}
                    </ul>
                  </div>
                  <div>
                    <Link to="/cart" className="a-btn-link">
                    <button type="button" className="btn btn-primary" style={{ marginLeft: '80px', marginTop: '40px', color: 'white' }}>
                      View Cart
                    </button>
                  </Link>
                  </div>
                  <a href="/checkout.html" className="a-a-checkout">
                    <button type="button" className="btn btn-outline-primary m-btn-checkout" style={{ marginLeft: '80px', marginTop: '40px' }}>
                      Checkout
                    </button>
                  </a>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Wishlist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Account</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cart
                <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{cart.getAllQuantity()}</span>
              </a>              
              <ul className="dropdown-menu shopping-cart box-background">
                <div className="shopping-cart">
                  <div className="shopping-cart-header">
                    <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{cartQuantity}</span>
                    <div className="shopping-cart-total">
                      <span className="lighter-text">Total: {cartPrice}</span>
                      <span className="main-color-text total-cart"></span>
                    </div>
                  </div>
                  <div>
                    <ul className="shopping-cart-items">
                      {cartItems ? cartItems.map((product) => (
                      <li className="clearfix">
                        <img src={product.images} alt="item1" />
                        <span className="item-name">{product.name}</span>
                        <span className="item-price">${product.price}</span>
                        <span className="item-quantity">Quantity: 01</span>
                        </li>
                        )): <p>cart is empty</p>}
                    </ul>
                  </div>
                  <div>
                  <Link to="/cart" className="a-btn-link">
                    <button type="button" className="btn btn-primary" style={{ marginLeft: '80px', marginTop: '40px', color: 'white' }}>
                      View Cart
                    </button>
                  </Link>
                  </div>
                  <a href="/checkout.html" className="a-a-checkout">
                    <button type="button" className="btn btn-outline-primary m-btn-checkout" style={{ marginLeft: '80px', marginTop: '40px' }}>
                      Checkout
                    </button>
                  </a>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;