import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaChartLine } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: '200px' }}>
      <h4 className="text-center mb-4">Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-white">
            <FaHome className="me-2" /> Home
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="profile" className="nav-link text-white">
            <FaUserAlt className="me-2" /> Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="analytics" className="nav-link text-white">
            <FaChartLine className="me-2" /> Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
