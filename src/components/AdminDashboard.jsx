import React from 'react';
import './AdminDashboard.css';
import footerImg from '../assets/BG Frame.png';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* Background */}
      <div className="background-image">
        <img src={footerImg} alt="Background" />
      </div>

      {/* Sidebar */}
<aside className="sidebar">
  <Link to="/admindashboard" className="nav-item active">Admin Dashboard</Link>
  <Link to="/managerdashboard" className="nav-item">Manager Dashboard</Link>
  <Link to="/agent" className="nav-item">Agent Dashboard</Link>
  <Link to="/billing" className="nav-item">Billing Admin</Link>
  <Link to="/security" className="nav-item">Security Auditor</Link>
</aside>


      {/* Main Dashboard */}
      <main className="dashboard-content">
        <h1 className="title">
          <span className="gradient-text">Admin Dashboard</span>
        </h1>

        <div className="top-cards">
          <div className="card blue">
            <p>Total Users</p>
            <h2>350</h2>
          </div>
          <div className="card teal">
            <p>Active Calls</p>
            <h2>7</h2>
          </div>
          <div className="card green">
            <p>Server Health</p>
            <h2>Normal</h2>
          </div>
          <div className="card purple">
            <p>Today's Call Volume</p>
            <h2>984</h2>
          </div>
        </div>

        <div className="middle-section">
          <div className="sip-trunks card-dark">
            <h3>SIP Trunks</h3>
            <p>Provider A</p>
            <p>Provider B</p>
          </div>

          <div className="ai-engine card-dark">
            <h3>AI/LLM Engine</h3>
            <div className="toggle">
              <span>Enable LLM Module</span>
              <span className="on">ON</span>
            </div>
            <div className="toggle">
              <span>Logs Enabled</span>
              <span className="on">ON</span>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="call-logs card-light">
            <h3>Call Logs</h3>
            <div className="log">
              <p>10:12 | 25/4/25 | Caller: 101 | Duration: 60 min</p>
              <p>10:12 | 25/4/25 | Caller: 101 | Duration: 60 min</p>
            </div>
          </div>

          <div className="multi-tenant card-light">
            <h3>Multi-Tenant Settings</h3>
            <p>Reseller X</p>
            <p>Welcome Telecom</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
