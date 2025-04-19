import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🌀</span>
        <span className="logo-text">Voip Studio</span>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Downloads</li>
        <li>Products</li>
        <li>Pricing</li>
        <button className="get-started-btn">Get Started</button>
      </ul>
    </nav>
  );
};

export default Navbar;
