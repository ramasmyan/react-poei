import React from 'react';
import './Footer.scss'; 
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer-basic fixed-bottom">
      <footer>
        <div className="social">
          <a href="#"><i className="icon ion-social-facebook"></i></a>
          <a href="#"><i className="icon ion-social-instagram"></i></a>
          <a href="#"><i className="icon ion-social-snapchat"></i></a>
          <Link
              to='/admin'
            >
              <i className="icon ion-social-twitter"></i>
          </Link>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Home</a></li>
          <li className="list-inline-item"><a href="#">Services</a></li>
          <li className="list-inline-item"><a href="#">About</a></li>
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p className="copyright">EcoStep © 2023</p>
      </footer>
    </div>
    
);
};

export default Footer;
