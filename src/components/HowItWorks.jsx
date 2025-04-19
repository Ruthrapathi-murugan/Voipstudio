import React from 'react';
import './HowItWorks.css';
import robotImg from '../assets/robot.png'; // replace with your robot image path
import { FaPhoneAlt, FaMicrophoneAlt, FaCommentDots } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <>
    <div className="how-it-works">
      <div className="features">
        <div className="feature-box">
          <FaPhoneAlt className="icon" />
          <p>AI Voice Calls</p>
        </div>
        <div className="feature-box">
          <FaMicrophoneAlt className="icon" />
          <p>Speech To Text</p>
        </div>
        <div className="feature-box">
          <FaCommentDots className="icon" />
          <p>Smart Pause Detection</p>
        </div>
      </div>

      <div className="how-section">
        <img src={robotImg} alt="AI Robot" className="robot-img" />
        <div className="steps">
          <h2>
            <span className="title-border">How It Works</span>
          </h2>
          <ul>
            <li><span>1</span> Caller Speaks</li>
            <li><span>2</span> Speech to Text</li>
            <li><span>3</span> LLM Processes It</li>
            <li><span>4</span> TTS Generates Reply</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default HowItWorks;
