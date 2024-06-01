import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Approvals.css"; // Import the CSS file

const Approvals = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Get the logged-in user

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/unauthorized"); // Redirect to an unauthorized page or home
    } else {
      fetchEvents();
    }
  }, [user, navigate]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events/unapproved");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/events/approve/${id}`);
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Error approving event", error);
    }
  };

  return (
    <div className="approvals-container">
      <h2>Unapproved Events</h2>
      <table className="approvals-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Category</th>
            <th>Time</th>
            <th>Seats</th>
            <th>Venue</th>
            <th>Ticket Price</th>
            <th>Actions</th>
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
              <td>
                <button
                  className="approve-button"
                  onClick={() => handleApprove(event._id)}
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Approvals;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Approvals.css'; // Import the CSS file

// const Approvals = () => {
//     const [listings, setListings] = useState([]);

//     useEffect(() => {
//         const fetchListings = async () => {
//             try {
//                 const response = await axios.get('/api/petlisting/unapproved');
//                 setListings(response.data);
//             } catch (error) {
//                 console.error('Error fetching listings', error);
//             }
//         };
//         fetchListings();
//     }, []);

//     const handleApprove = async (id) => {
//         try {
//             await axios.put(`/api/petlisting/approve/${id}`);
//             setListings(listings.filter(listing => listing._id !== id));
//         } catch (error) {
//             console.error('Error approving listing', error);
//         }
//     };

//     return (
//         <div className="approvals-container">
//             <h2>Unapproved Pet Listings</h2>
//             <table className="approvals-table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Animal Type</th>
//                         <th>Age</th>
//                         <th>Breed</th>
//                         <th>Sex</th>
//                         <th>Colour</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {listings.map(listing => (
//                         <tr key={listing._id}>
//                             <td>{listing.name}</td>
//                             <td>{listing.animalType}</td>
//                             <td>{listing.age}</td>
//                             <td>{listing.breed}</td>
//                             <td>{listing.sex}</td>
//                             <td>{listing.colour}</td>
//                             <td>
//                                 <button className="approve-button" onClick={() => handleApprove(listing._id)}>Approve</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Approvals;
