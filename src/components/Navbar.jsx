import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImg} alt="Voip Studio Logo" className="logo-image" />
        <span className="logo-text">Voip Studio</span>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className="nav-link" 
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/voicecall" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Voice Call
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/features" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/pricing" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admindashboard" 
            className="nav-link" 
            onClick={closeMenu}
          >
            Admin
          </NavLink>
        </li>
        <li>
          <Link 
            to="/login" 
            className="nav-link" 
            onClick={closeMenu}
          >
            <button className="get-started-btn">Get Started</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;