import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🌀</span>
        <span className="logo-text">Voip Studio</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Downloads</li>
        <li>Products</li>
        <li>Pricing</li>
      </ul>
      <button className="get-started-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
