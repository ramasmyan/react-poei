import React, { useEffect, useState } from 'react';
import './SideNavBar.scss';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

function SideNavBar(props) {
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleToggleNavbar = () => {
    props.setIsSidebarOpen(!props.isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log(link);
  };

  useEffect(() => {
    // Votre code JavaScript ici
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }

    linkColor.forEach((l) => l.addEventListener('click', colorLink));

    // Your code to run since DOM is loaded and ready
  }, []); // La dépendance est vide, ce qui signifie que ce useEffect s'exécutera une seule fois au moment du montage.

  return (
    <div>
      <header className="header" id="header">
        <div className="header_toggle" onClick={handleToggleNavbar}>
          <i className={`bx ${props.isSidebarOpen ? 'bx-x' : 'bx-menu'}`} id="header-toggle"></i>
        </div>
      </header>
      <div className={`l-navbar ${props.isSidebarOpen ? 'show-side' : ''}`} id="side-nav-bar">
        <nav className="side-nav">
          <div className="nav_list">
            <Link
              to='/admin'
              className={`nav_link ${activeLink === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleLinkClick('dashboard')}
            >
              <i className='bx bx-bar-chart-alt-2 nav_icon'></i>
              <span className="nav_name">Dashboard</span>
            </Link>
            <Link
              to='/admin/products'
              className={`nav_link ${activeLink === 'products' ? 'active' : ''}`}
              onClick={() => handleLinkClick('products')}
            >
              <i className='bx bx-store-alt nav_icon'></i>
              <span className="nav_name">Products</span>
            </Link>
          </div>
          <Link to='/' className="nav_link d-flex" key={2}>
            <i className='bx bx-log-out nav_icon'></i> 
            <span className="nav_name">Sign Out</span> 
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default SideNavBar;
