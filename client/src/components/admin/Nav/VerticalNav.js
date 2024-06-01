import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import TheaterComedyRoundedIcon from "@mui/icons-material/TheaterComedyRounded";

import logo from "./../../../assets/images/logo.svg";
import "./VerticalNav.css";

const VerticalNav = () => {
  return (
    <div className="navbar-container">
      <Sidebar className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <Menu className="menu">
          <MenuItem className="nav-link">
            <Link to="/admin/home">
              <GridViewRoundedIcon /> Dashboard
            </Link>
          </MenuItem>
          <MenuItem className="nav-link">
            <Link to="/admin/users">
              <PeopleIcon /> Users
            </Link>
          </MenuItem>
          <MenuItem className="nav-link">
            <Link to="/admin/reports">
              <ReceiptRoundedIcon /> Reports
            </Link>
          </MenuItem>
          <MenuItem className="nav-link">
            <Link to="/admin/events">
              <TheaterComedyRoundedIcon /> Events
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default VerticalNav;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./VerticalNav.css";

// const VerticalNav = () => {
//   return (
//     <div className="vertical-nav">
//       <div className="logo-container">
//         {/* <img src={logo} alt="Logo" className="logo" /> */}
//       </div>
//       <Link to="/admin">Dashboard</Link>
//       <Link to="/admin/users">Users</Link>
//       <Link to="/admin/reports">Reports</Link>
//       <Link to="/admin/events">Events</Link>
//     </div>
//   );
// };

// export default VerticalNav;
