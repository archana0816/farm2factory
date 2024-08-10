import React, { useState } from 'react';
import './AdminNavbar.css';
import './AdminSidebar.css'; // Import this if you need the sidebar's CSS in the navbar
import { FaBars } from 'react-icons/fa'; // Make sure to install react-icons

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="admin-navbar">
      <h3>Farm2Factory</h3>
      <button className="hamburger-icon" onClick={toggleSidebar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default AdminNavbar;
