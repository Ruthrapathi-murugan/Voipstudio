import React from 'react';
import './VoiceCallSystem.css';
import { FaCheckCircle, FaCog, FaBriefcase } from 'react-icons/fa';

const VoiceCallSystem = () => {
  return (
    <div className="voice-call-system">
      <div className="text-section">
        <h1>
          LLM BASED <span className="gradient-text">Voice Call System</span>
        </h1>
        <h4>
        Build real-time AI-powered voice conversations using our REST API.
        </h4>
        <button className="download-btn">Download SDK</button>
      </div>

      <div className="card-section">
        <div className="card">
          <FaCheckCircle className="card-icon" />
          <p>Getting Started</p>
        </div>
        <div className="card">
          <FaCog className="card-icon" />
          <p>API Reference</p>
        </div>
        <div className="card">
          <FaBriefcase className="card-icon" />
          <p>Use Cases</p>
        </div>
        <div className="card">
          <FaCog className="card-icon" />
          <p>API Reference</p>
        </div>
      </div>
    </div>
  );
};

export default VoiceCallSystem;
