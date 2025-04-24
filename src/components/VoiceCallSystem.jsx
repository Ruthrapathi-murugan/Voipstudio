import React from 'react';
import './VoiceCallSystem.css';
import { FaCheckCircle, FaCog, FaBriefcase } from 'react-icons/fa';
import voiceImg from '../assets/bg-wave.png';

const VoiceCallSystem = () => {
  return (
    <div className="voice-call-system">
      <img src={voiceImg} alt="Background" className="footer-image" />
      <div className="text-section">
        <h1>
          <span className="gradient-text">LLM-Based</span><br /> Voice Call System
        </h1>
        <h4>Build real-time AI-powered voice conversations using our REST API.</h4>
        <button className="download-btn">Download Feature Overview</button>
      </div>

      <div className="card-section">
        <div className="card">
          <div className="card-icon purple"><FaCheckCircle /></div>
          <p>Getting Started</p>
        </div>
        <div className="card">
          <div className="card-icon blue"><FaCog /></div>
          <p>API Reference</p>
        </div>
        <div className="card">
          <div className="card-icon pink"><FaBriefcase /></div>
          <p>Use Cases</p>
        </div>
        <div className="card">
          <div className="card-icon blue"><FaCog /></div>
          <p>API Reference</p>
        </div>
      </div>
    </div>
  );
};

export default VoiceCallSystem;
