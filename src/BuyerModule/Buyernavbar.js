import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Buyernavbar.css'; // Import the CSS file for Navbar styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const Buyernavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to handle logout (e.g., clearing auth tokens)
    navigate('/home');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="appName">Farm2Factory</div>
      <div className="navItems">
        <a href="/home" className="navLink">Home</a>
        <a href="/aboutus" className="navLink">About Us</a>
        <div className="profileIcon" onClick={toggleDropdown}>
          <i className="fas fa-user"></i>
          {dropdownVisible && (
            <div className="dropdownMenu">
              <a href="/profile" className="dropdownItem">Profile</a>
              <a onClick={handleLogout} className="dropdownItem">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Buyernavbar;
