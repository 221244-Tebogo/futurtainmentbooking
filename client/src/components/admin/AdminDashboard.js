import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminUploadEvent from "./AdminUploadEvent";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminUploadEvent />
      <h2>Existing Events</h2>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Category</th>
            <th>Time</th>
            <th>Seats</th>
            <th>Venue</th>
            <th>Ticket Price</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.eventName}</td>
              <td>{event.eventCategory}</td>
              <td>{event.time}</td>
              <td>{event.seats}</td>
              <td>{event.venue}</td>
              <td>{event.ticketPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

//old

// import React, { useState, useEffect } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import axios from "axios";
// import Approvals from "../Approvals";
// import Users from "../users/Users"; // Corrected import path
// import "./Dashboard.css"; // Ensure to create a CSS file for Dashboard styling

// const Dashboard = () => {
//   const [events, setEvents] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     eventName: "",
//     eventCategory: "Entertainment(Tickets)",
//     time: "",
//     seats: "",
//     venue: "",
//     ticketPrice: "",
//   });

//   useEffect(() => {
//     fetchEvents();
//     fetchUsers();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("/api/events");
//       setEvents(response.data);
//     } catch (error) {
//       console.error("Error fetching events", error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("/api/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/events", formData);
//       fetchEvents();
//       alert("Event added successfully!");
//     } catch (error) {
//       console.error("Error adding event", error);
//     }
//   };

//   const handleDeleteEvent = async (id) => {
//     try {
//       await axios.delete(`/api/events/${id}`);
//       fetchEvents();
//       alert("Event deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting event", error);
//     }
//   };

//   const handleCancelEvent = async (id) => {
//     try {
//       await axios.put(`/api/events/cancel/${id}`);
//       fetchEvents();
//       alert("Event cancelled successfully!");
//     } catch (error) {
//       console.error("Error cancelling event", error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`/api/users/${id}`);
//       fetchUsers();
//       alert("User deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting user", error);
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin">Home</Link>
//           </li>
//           <li>
//             <Link to="/admin/approvals">Approvals</Link>
//           </li>
//           <li>
//             <Link to="/admin/users">Users</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="admin-content">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <h2>Admin Dashboard</h2>

//                 <div className="form-section">
//                   <h3>Add Event</h3>
//                   <form onSubmit={handleSubmit}>
//                     <div>
//                       <label>Event Name</label>
//                       <input
//                         type="text"
//                         name="eventName"
//                         value={formData.eventName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label>Event Category</label>
//                       <select
//                         name="eventCategory"
//                         value={formData.eventCategory}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="Entertainment(Tickets)">
//                           Entertainment(Tickets)
//                         </option>
//                         <option value="Music">Music</option>
//                         <option value="Kids events">Kids events</option>
//                         <option value="Comedy">Comedy</option>
//                         <option value="Fashion shows">Fashion shows</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label>Time</label>
//                       <input
//                         type="text"
//                         name="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label>Seats Numbers</label>
//                       <input
//                         type="number"
//                         name="seats"
//                         value={formData.seats}
//                         onChange={handleChange}
//                         required
//                         min="100"
//                         max="500"
//                       />
//                     </div>
//                     <div>
//                       <label>Venue</label>
//                       <input
//                         type="text"
//                         name="venue"
//                         value={formData.venue}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label>Ticket Price</label>
//                       <input
//                         type="number"
//                         name="ticketPrice"
//                         value={formData.ticketPrice}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <button type="submit">Add Event</button>
//                   </form>
//                 </div>

//                 <div className="events-section">
//                   <h3>Events</h3>
//                   <ul>
//                     {events.map((event) => (
//                       <li key={event._id}>
//                         <p>{event.eventName}</p>
//                         <button onClick={() => handleDeleteEvent(event._id)}>
//                           Delete
//                         </button>
//                         <button onClick={() => handleCancelEvent(event._id)}>
//                           Cancel
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             }
//           />
//           <Route path="/approvals" element={<Approvals />} />
//           <Route path="/users" element={<Users />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import axios from "axios";
// import Approvals from "../Approvals";
// import Users from "../Users";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [events, setEvents] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     eventName: "",
//     eventCategory: "Entertainment(Tickets)",
//     time: "",
//     seats: "",
//     venue: "",
//     ticketPrice: "",
//   });

//   useEffect(() => {
//     fetchEvents();
//     fetchUsers();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("/api/events");
//       setEvents(response.data);
//     } catch (error) {
//       console.error("Error fetching events", error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("/api/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/events", formData);
//       fetchEvents();
//       alert("Event added successfully!");
//     } catch (error) {
//       console.error("Error adding event", error);
//     }
//   };

//   const handleDeleteEvent = async (id) => {
//     try {
//       await axios.delete(`/api/events/${id}`);
//       fetchEvents();
//       alert("Event deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting event", error);
//     }
//   };

//   const handleCancelEvent = async (id) => {
//     try {
//       await axios.put(`/api/events/cancel/${id}`);
//       fetchEvents();
//       alert("Event cancelled successfully!");
//     } catch (error) {
//       console.error("Error cancelling event", error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`/api/users/${id}`);
//       fetchUsers();
//       alert("User deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting user", error);
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/admin">Home</Link>
//           </li>
//           <li>
//             <Link to="/admin/approvals">Approvals</Link>
//           </li>
//           <li>
//             <Link to="/admin/users">Users</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="admin-content">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <h2>Admin Dashboard</h2>

//                 <div className="form-section">
//                   <h3>Add Event</h3>
//                   <form onSubmit={handleSubmit}>
//                     <div>
//                       <label>Event Name</label>
//                       <input
//                         type="text"
//                         name="eventName"
//                         value={formData.eventName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label>Event Category</label>
//                       <select
//                         name="eventCategory"
//                         value={formData.eventCategory}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="Entertainment(Tickets)">
//                           Entertainment(Tickets)
//                         </option>
//                         <option value="Music">Music</option>
//                         <option value="Kids events">Kids events</option>
//                         <option value="Comedy">Comedy</option>
//                         <option value="Fashion shows">Fashion shows</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label>Time</label>
//                       <input
//                         type="text"
//                         name="time"
//                         value={formData.time}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label>Seats Numbers</label>
//                       <input
//                         type="number"
//                         name="seats"
//                         value={formData.seats}
//                         onChange={handleChange}
//                         required
//                         min="100"
//                         max="500"
//                       />
//                     </div>
//                     <div>
//                       <label>Venue</label>
//                       <input
//                         type="text"
//                         name="venue"
//                         value={formData.venue}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label>Ticket Price</label>
//                       <input
//                         type="number"
//                         name="ticketPrice"
//                         value={formData.ticketPrice}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <button type="submit">Add Event</button>
//                   </form>
//                 </div>

//                 <div className="events-section">
//                   <h3>Events</h3>
//                   <ul>
//                     {events.map((event) => (
//                       <li key={event._id}>
//                         <p>{event.eventName}</p>
//                         <button onClick={() => handleDeleteEvent(event._id)}>
//                           Delete
//                         </button>
//                         <button onClick={() => handleCancelEvent(event._id)}>
//                           Cancel
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             }
//           />
//           <Route path="/approvals" element={<Approvals />} />
//           <Route path="/users" element={<Users />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
// import Welcome from './Welcome';
// import Approvals from './Approvals';
// import './AdminHome.css'; // Import the CSS file

// const AdminHome = () => {
//     return (
//         <div className="admin-container">
//             <div className="sidebar">
//                 <ul>
//                     <li><Link to="home">Welcome</Link></li>
//                     <li><Link to="approvals">Approvals</Link></li>
//                 </ul>
//             </div>
//             <div className="content">
//                 <Routes>
//                     <Route path="home" element={<Welcome />} />
//                     <Route path="approvals" element={<Approvals />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// };

// export default AdminHome;
