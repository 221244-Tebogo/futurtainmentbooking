import React from "react";
import { Link } from "react-router-dom";
import "./VerticalNav.css";

const VerticalNav = () => {
  return (
    <div className="vertical-nav">
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
      </div>
      <Link to="/admin">Dashboard</Link>
      <Link to="/admin/users">Users</Link>
      <Link to="/admin/reports">Reports</Link>
      <Link to="/admin/events">Events</Link>
    </div>
  );
};

export default VerticalNav;
