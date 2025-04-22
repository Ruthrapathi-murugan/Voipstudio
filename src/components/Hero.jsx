import React from 'react';
import './Hero.css';
import aiImage from '../assets/ai-chip.png'; // Replace with your circuit AI image
 // Replace with your background wave image

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
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
      <div className="hero-image">
        <img src={aiImage} alt="AI Circuit" />
      </div>
    </div>
  );
};

export default Hero;
