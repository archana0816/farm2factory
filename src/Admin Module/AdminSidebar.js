import React from 'react';
import './AdminSidebar.css';

const AdminSidebar = ({ isOpen }) => {
  return (
    <div className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul>
        <li>Dashboard</li>
        <li>Product Details</li>
        <li>User Management</li>
        <li>Transaction History</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
