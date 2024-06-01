import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import AdminUploadEvent from "./components/admin/AdminUploadEvent";
import ContactUs from "./routes/ContactUs/ContactUs";
import AdminDashboard from "./components/admin/AdminDashboard";
import Home from "./routes/Home/Home";
import UserEvents from "./routes/Events/UserEvents";
import EventsFilter from "./routes/EventsFilter/EventsFilter";
import EventDetails from "./routes/EventDetails/EventDetails";
import Navbar from "./components/Navbar/Navbar";
import AdminLayout from "./components/admin/AdminLayout";
import UserLayout from "./components/UserLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<UserEvents />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/eventsfilter/:type" element={<EventsFilter />} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          <Route
            path="/unauthorized"
            element={<div>Unauthorized Access</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Auth from "./components/Auth";
// import AdminUploadEvent from "./components/admin/AdminUploadEvent";
// import ContactUs from "./routes/ContactUs/ContactUs";
// import AdminDashboard from "./components/admin/AdminDashboard";
// import Home from "./routes/Home/Home";
// import UserEvents from "./routes/Events/UserEvents";
// import EventsFilter from "./routes/EventsFilter/EventsFilter";
// import EventDetails from "./routes/EventDetails/EventDetails";
// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Auth />} />
//           <Route path="/upload-event" element={<AdminUploadEvent />} />
//           <Route path="/admin/*" element={<AdminDashboard />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/events" element={<UserEvents />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/eventsfilter/:type" element={<EventsFilter />} />
//           <Route path="/eventdetails/:id" element={<EventDetails />} />
//           <Route
//             path="/unauthorized"
//             element={<div>Unauthorized Access</div>}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Auth from "./components/Auth";
// import UploadEvent from "./components/admin/uploadEvents/UploadEvent";
// import ContactUs from "./routes/ContactUs/ContactUs";
// import Dashboard from "./components/admin/dashboard/Dashboard";
// import Home from "./routes/Home/Home";
// import Events from "./routes/Events/Events";
// import EventsFilter from "./routes/EventsFilter/EventsFilter";
// import EventDetails from "./routes/EventDetails/EventDetails";
// import Navbar from "./components/Navbar/Navbar";
// import VerticalNav from "./components/admin/Nav/VerticalNav"; // Import VerticalNav
// import Users from "./components/admin/users/Users"; // Import Users

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Auth />} />
//           <Route path="/upload-event" element={<UploadEvent />} />
//           <Route path="/admin/*" element={<AdminLayout />} />{" "}
//           {/* Updated route */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/eventsfilter/:type" element={<EventsFilter />} />
//           <Route path="/eventdetails/:id" element={<EventDetails />} />
//           <Route
//             path="/unauthorized"
//             element={<div>Unauthorized Access</div>}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// const AdminLayout = () => {
//   return (
//     <div className="admin-layout">
//       <VerticalNav /> {/* Use VerticalNav for admin pages */}
//       <Routes>
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="users" element={<Users />} />
//         <Route path="home" element={<AdminHome />} />{" "}
//         {/* Correct admin home path */}
//       </Routes>
//     </div>
//   );
// };

// const AdminHome = () => {
//   return (
//     <div>
//       <h1>Admin Home</h1>
//       {/* Add other admin home content here */}
//     </div>
//   );
// };

// export default App;
