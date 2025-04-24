import React from 'react';
import './Footer.css';
import footerImg from '../assets/BG Frame.png'; // your image path here

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerImg} alt="Footer Background" className="footer-image" />
      <div className="text">
        <h1>
          <span className="gradient-text">AI</span> Powered <br />
          <span className="gradient-text">Voice Revolution</span>
        </h1>
        <p>
          Deliver smarter, faster, human-like voice interactions with AI-powered LLMs for natural, advanced conversations.
        </p>
        <div className="hero-buttons">
            <button className="gradient-btn">Try the Demo</button>
            <button className="gradient-btn-outline">View API Docs</button>
          </div>
      </div>
    </div>
  );
};

export default Footer;
