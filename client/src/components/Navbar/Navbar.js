// import React from "react";
// import "./Navbar.css";
// import logo from "../../assets/images/logo.svg";
// import wishlistIcon from "../../assets/icons/wishlist.svg";
// import checkoutIcon from "../../assets/icons/checkout.svg";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const user = true; // user authentication
//   const urlLocation = window.location.href;

//   // Function to handle logout
//   const handleLogout = () => {
//     // Your logout logic here
//     // Redirect to the login page
//     navigate("/");
//   };

//   return (
//     <div className="main">
//       <img className="logoImg" src={logo} alt="Logo" />
//       <div className="links">
//         <Link to="/home" className="link">
//           Home
//         </Link>
//         <Link to="/events" className="link">
//           Events
//         </Link>
//         <Link to="/upload-event" className="link">
//           Upload Event
//         </Link>
//         <Link to="/contact-us" className="link">
//           Contact Us
//         </Link>
//         {user ? (
//           <Link to="/profile" className="link">
//             Profile
//           </Link>
//         ) : (
//           <Link to="/" className="link">
//             Login
//           </Link>
//         )}
//         <Link to="/wishlist" className="link">
//           <img
//             className="icon"
//             src={wishlistIcon}
//             alt="Wishlist Icon"
//             style={{ width: "20px", height: "20px" }}
//           />
//         </Link>
//         <Link to="/checkout" className="link">
//           <img
//             className="icon"
//             src={checkoutIcon}
//             alt="Checkout Icon"
//             style={{ width: "20px", height: "20px" }}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import checkoutIcon from "../../assets/icons/checkout.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true; // user authentication

  return (
    <div className="main">
      <img className="logoImg" src={logo} alt="Logo" />
      <div className="links">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/events" className="link">
          Events
        </Link>
        <Link to="/contact-us" className="link">
          Contact Us
        </Link>
        {user ? (
          <Link to="/profile" className="link">
            Profile
          </Link>
        ) : (
          <Link to="/" className="link">
            Login
          </Link>
        )}
        <Link to="/checkout" className="link">
          <img
            className="icon"
            src={checkoutIcon}
            alt="Checkout Icon"
            style={{ width: "20px", height: "20px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
