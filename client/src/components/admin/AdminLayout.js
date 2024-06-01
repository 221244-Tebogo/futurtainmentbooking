import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import VerticalNav from "./Nav/VerticalNav";
import Users from "./users/Users";
import Reports from "./Reports";
import AdminUploadEvent from "./AdminUploadEvent";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <VerticalNav /> {/* Use VerticalNav for admin pages */}
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="upload-event" element={<AdminUploadEvent />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />{" "}
        {/* Assuming you have this component */}
        <Route path="home" element={<AdminDashboard />} />{" "}
        {/* Correct admin home path */}
      </Routes>
    </div>
  );
};

export default AdminLayout;
