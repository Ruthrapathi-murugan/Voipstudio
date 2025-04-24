import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      
      <div className="features-grid">
        {/* First Auto Call Response Card */}
        <div className="feature-card">
          <h1 className="gradient-text">Auto Call Response</h1>
          <ul className="feature-benefits">
            <li>Automatically reply to callers using AI.</li>
            <li>No manual intervention needed.</li>
            <li>Ideal for customer support, surveys, confirmations.</li>
          </ul>
      

       
          <h3 className="gradient-text">Use Case</h3>
          <div className="use-cases">
            <h4 className="use-case-title">Customer Support</h4>
            <ul className="use-case-industries">
              <li>E-Commerce</li>
              <li>Health Care</li>
            </ul>
            </div>
          </div>
        

        {/* Second Auto Call Response Card */}
        <div className="feature-card">
        <h1 className="gradient-text">Auto Call Response</h1>
          <ul className="feature-benefits">
            <li>Automatically reply to callers using AI.</li>
            <li>No manual intervention needed.</li>
            <li>Ideal for customer support, surveys, confirmations.</li>
          </ul>
        </div>

        {/* Third Auto Call Response Card */}
        <div className="feature-card">
        <h1 className="gradient-text">Auto Call Response</h1>
          <ul className="feature-benefits">
            <li>Automatically reply to callers using AI.</li>
            <li>No manual intervention needed.</li>
            <li>Ideal for customer support, surveys, confirmations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;