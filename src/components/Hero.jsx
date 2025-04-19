import React from 'react';
import './Hero.css';
import robotImg from '../assets/robot.png'; // replace with your robot image path

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          <span className="highlight">AI</span> Powered <br /> Voice Revolution
        </h1>
        <p>
          Deliver smarter, faster, and more human-like voice interactions with the power of Large Language Models (LLMs). Our AI-driven solutions go beyond traditional voice systems by enabling natural.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Try the Demo</button>
          <button className="secondary-btn">View API Docs</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={robotImg} alt="AI Robot" />
      </div>
    </div>
  );
};

export default Hero;
