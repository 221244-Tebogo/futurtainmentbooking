import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css"; // Ensure to create the corresponding CSS

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [reports, setReports] = useState([]); // Assuming there's an endpoint for reports
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchReports();
    fetchEvents();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const fetchReports = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/reports");
      setReports(response.data);
    } catch (error) {
      console.error("Error fetching reports", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Admin Dashboard</h2>
      <div className="dashboard-blocks">
        <div className="dashboard-block">
          <h3>Users</h3>
          <p>{users.length} Users</p>
        </div>
        <div className="dashboard-block">
          <h3>Reports</h3>
          <p>{reports.length} Reports</p>
        </div>
        <div className="dashboard-block">
          <h3>Events</h3>
          <p>{events.length} Events</p>
        </div>
      </div>
      <div className="dashboard-tables">
        <h3>All Registered Users</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="events-container">
        <h3>Events</h3>
        <div className="events-grid">
          {events.map((event) => (
            <div className="card event-card" key={event._id}>
              <div className="card-header">
                <div className="media">
                  <img
                    className="mr-3 img-fluid"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAb1BMVEW8vLyurq4pKSmYmJhFRUU/Pz+oqKhXV1dNTU21tbWdnZ1kZGRbW1uRkZGpqalzc3OUlJRGRkZISEivr69SUlK2trYsLCx1dXVMTEwcHBw0NDRfX198fHxPT0+ZmZlCQkJAQECioqJQUFCcnJz+/v7wLOrbAAAAAWJLR0QktAb5mQAAAGVJREFUOMvt0DcOgDAQRNEhmGSSAZMz978jrIRoMC0Iyb96xWiLBXS6n2eYls2ck7h8z2WeH/AwsuODIKt3SSoy5IUsKyLI6iGrm1YGPG87Yj/Ip4uAGKc5rpd1Owjy11/T6V5rB6aHBJ+HAxDyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA3LTI1VDA5OjI2OjM2LTA1OjAw+V5dzQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNy0yNVQwOToyNjozNi0wNTowMIgD5XEAAAAASUVORK5CYII="
                    alt="John Duo"
                  />
                  <div className="media-body">
                    <h3 className="mt-0">By {event.organizer}</h3>
                    <p>5 min ago</p>
                  </div>
                  <div className="custom-dropdown dropdown">
                    <div
                      className="dropdown-toggle"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event-card-img">
                <img
                  className="img-fluid"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCADmAXIBAREA/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBgkCAwQFAf/EAEIQAAEDBAEDAgMEBgYJBQAAAAABAgMEBQYRBwgSIRMxCUFRFCIyYRUjQlJicRYYGSRWcxczWIGRlKGx1JKWorLT/9oACAEBAAA/ALQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
                  alt="Event Image"
                />
                <h4>{event.name}</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-auto">
                    <h5>Date</h5>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                  <div className="col-auto">
                    <h5>Location</h5>
                    <p>{event.location}</p>
                  </div>
                  <div className="col-auto">
                    <h5>Tickets</h5>
                    <p>Available {event.ticketsAvailable}</p>
                  </div>
                </div>
              </div>
              <div className="card-sponsor">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h4>Sponsor by</h4>
                    <div className="card-sponsor-img">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAMFBMVEW8vLyAgIBycnJ3d3dvb2+1tbViYmJ5eXl4eHhzc3N6enqCgoJpaWlxcXF2dnb+/v6NdmrhAAAAAWJLR0QPGLoA2QAAACJJREFUGNNjYBiOQMgEhBAgrGJWWAUSf8/aeXvWDrQj6QIA1CYGM/FuhKoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDctMjVUMDk6MjY6MzYtMDU6MDD5Xl3NAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA3LTI1VDA5OjI2OjM2LTA1OjAwiAPlcQAAAABJRU5ErkJggg=="
                          alt="Sponsor"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <p>${event.price}</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-heart"></i>126{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-comment"></i>03{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-sign-out"></i>
                    </a>
                  </li>
                </ul>
                <div className="pull-right">
                  <a href="#">
                    {" "}
                    <i className="fa fa-bar-chart"></i>Insights
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

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
