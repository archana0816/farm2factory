import React, { useState } from "react";
import './AdminCombined.css';
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";

const AdminCombined = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`admin-combined ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <AdminNavbar toggleSidebar={toggleSidebar} />
      <div className="admin-main-content">
        <AdminSidebar isOpen={isSidebarOpen} />
        <div className="admin-content">
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminCombined;
