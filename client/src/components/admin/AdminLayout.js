import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminUploadEvent from "./uploadEvent/AdminUploadEvent";
import AdminDashboard from "./dashboard/AdminDashboard";
import VerticalNav from "./Nav/VerticalNav"; // Import VerticalNav
import Users from "./users/Users"; // Import Users

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <VerticalNav /> {/* Use VerticalNav for admin pages */}
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="upload-event" element={<AdminUploadEvent />} />
        <Route path="users" element={<Users />} />
        <Route path="home" element={<AdminDashboard />} />{" "}
        {/* Correct admin home path */}
      </Routes>
    </div>
  );
};

export default AdminLayout;
