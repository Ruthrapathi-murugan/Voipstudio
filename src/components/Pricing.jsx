import React from "react";
import "./Pricing.css";
import robotImg from "../assets/robot.png";
import footerImg from '../assets/bg-wave.png'; // your image path here

const Pricing = () => {
  return (
    <div className="pricing-section">
      
      <h2>Pricing</h2>

      <div className="toggle-buttons">
        <button>Weekly</button>
        <button className="active">Monthly</button>
        <button>Yearly</button>
      </div>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h1>Starter</h1>
          <h1>Free</h1>
          <p>Limited API access</p>
        </div>

        <div className="pricing-card">
          <h3>Pro</h3>
          <h4>$49/month</h4>
          <p>Unlimited Support Calls</p>
          <p>Analytics dashboard</p>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <h4>Custom</h4>
          <p>Unlimited API access</p>
          <p>Unlimited Support Calls</p>
          <p>Analytics dashboard</p>
          <p>More</p>
        </div>
      </div>

      
    </div>
  );
};

export default Pricing;
