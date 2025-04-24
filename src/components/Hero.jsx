import React from 'react';
import './Hero.css';
import aiLogo from '../assets/Ai Image.png';
import wavePattern from '../assets/bg-wave.png';

const Hero = () => {
  return (
    <div className="hero-background">
      <img src={wavePattern} alt="Wave" className="wave-pattern" />
      <img src={aiLogo} alt="AI Logo" className="ai-logo" />
    </div>
  );
};

export default Hero;
