import React from 'react';
import './Hero.css';
import aiImage from '../assets/ai-chip.png';
import bgImage from '../assets/BG Frame.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-content">
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
       
      </div>
    </div>
  );
};

export default Hero;
