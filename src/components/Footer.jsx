import React from 'react';
import './Footer.css';
import footerImg from '../assets/BG Frame.png'; // Your background image

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerImg} alt="Footer Background" className="footer-image" />
      <div className="text">
        <h1 className="main-heading">
          <span className="gradient-text ai-large">AI</span>
          <span className='voice'>
            <span className="powered">Powered </span>
            <span className="voice">Voice </span>
            <span className="revolution">Revolution</span>
          </span>
          
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
