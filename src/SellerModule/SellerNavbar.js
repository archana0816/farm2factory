import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './SellerNavbar.css'; // Import the CSS file for Navbar styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const SellerNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/home');
//   };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="seller-navbar">
      <div className="seller-appName">Farm2Factory</div>
      <div className="seller-navItems">
        <a href="/home" className="seller-navLink">Home</a>
        <a href="/aboutus" className="seller-navLink">About Us</a>
        <div className="seller-profileIcon" onClick={toggleDropdown}>
          <i className="fas fa-user"></i>
          {dropdownVisible && (
            <div className="seller-dropdownMenu">
              <a href="/sellerprofile" className="seller-dropdownItem">Profile</a>
              <a className="seller-dropdownItem">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SellerNavbar;
