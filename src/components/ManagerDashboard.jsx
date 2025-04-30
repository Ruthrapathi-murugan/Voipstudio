import React from 'react';
import './ManagerDashboard.css';
import { FaUser, FaClock, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManagerDashboard = () => {
  return (
    <div className="manager-dashboard">
      <aside className="sidebar">
        <ul>
       
          <li className="active">Manager Dashboard</li>
          <Link to="/admindashboard">Admin Dashboard</Link>
          <li>Agent Performance</li>
          <li>Call Recordings</li>
          <li>IVR Flow Editor</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1 className="gradient-text">Manager Dashboard</h1>

        <div className="stats-row">
          <div className="stat-card pink">
            <FaUser className="icon" />
            <p>Total Calls Today</p>
            <h2>350</h2>
          </div>
          <div className="stat-card blue">
            <FaClock className="icon" />
            <p>Avg Call Duration</p>
            <h2>4m 12s</h2>
          </div>
          <div className="stat-card orange">
            <FaArrowDown className="icon" />
            <p>Call Drop</p>
            <h2>2,242</h2>
          </div>
        </div>

        <div className="tables-row">
          <div className="table-card">
            <h3>Agent Performance</h3>
            <table>
              <thead>
                <tr>
                  <th>Agent</th>
                  <th>Calls Handled</th>
                  <th>Avg Talk Time</th>
                  <th>Customer</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>👤</td><td>60 h 3 min</td><td>48 min</td><td>Agent 01</td></tr>
                <tr><td>👤</td><td>60 h 3 min</td><td>48 min</td><td>Agent 01</td></tr>
                <tr><td>👤</td><td>60 h 3 min</td><td>48 min</td><td>Agent 01</td></tr>
              </tbody>
            </table>
          </div>
          <div className="table-card">
            <h3>Call Recordings</h3>
            <table>
              <thead>
                <tr>
                  <th>Agent</th>
                  <th>Duration</th>
                  <th>Avg Talk Time</th>
                  <th>Customer</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>📞</td><td>60 h 3 min</td><td>48 min</td><td>Agent 01</td></tr>
                <tr><td>📞</td><td>60 h 3 min</td><td>48 min</td><td>Agent 01</td></tr>
                <tr><td>📞</td><td>60 h 3 min</td><td>48 min</td><td>Agent 01</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="call-logs">
          <h3>Call Logs</h3>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Date</th>
                <th>Caller</th>
                <th>Duration</th>
                <th>Reports</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10:12</td><td>25/4/25</td><td>101</td><td>60 min</td>
                <td><button className="export-btn">Export</button></td>
              </tr>
              <tr>
                <td>10:12</td><td>25/4/25</td><td>101</td><td>60 min</td>
                <td><button className="export-btn">Export</button></td>
              </tr>
            </tbody>
          </table>

          <div className="report-dropdown">
            <label>Reports</label>
            <select>
              <option>April</option>
              <option>March</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManagerDashboard;
