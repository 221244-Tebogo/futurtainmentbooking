import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Events.css"; // Ensure to create a CSS file for Events styling

const Events = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventName: "",
    eventCategory: "Entertainment(Tickets)",
    time: "",
    seats: "",
    venue: "",
    ticketPrice: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/events", formData);
      fetchEvents();
      alert("Event added successfully!");
    } catch (error) {
      console.error("Error adding event", error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`/api/events/${id}`);
      fetchEvents();
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  const handleUpdateEvent = async (id) => {
    try {
      await axios.put(`/api/events/${id}`, formData);
      fetchEvents();
      alert("Event updated successfully!");
    } catch (error) {
      console.error("Error updating event", error);
    }
  };

  const handleCancelEvent = async (id) => {
    try {
      await axios.put(`/api/events/cancel/${id}`);
      fetchEvents();
      alert("Event cancelled successfully!");
    } catch (error) {
      console.error("Error cancelling event", error);
    }
  };

  return (
    <div className="events-container">
      <h2>Manage Events</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Event Category</label>
          <select
            name="eventCategory"
            value={formData.eventCategory}
            onChange={handleChange}
            required
          >
            <option value="Entertainment(Tickets)">
              Entertainment(Tickets)
            </option>
            <option value="Music">Music</option>
            <option value="Kids events">Kids events</option>
            <option value="Comedy">Comedy</option>
            <option value="Fashion shows">Fashion shows</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Seats Numbers</label>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            required
            min="100"
            max="500"
          />
        </div>
        <div>
          <label>Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ticket Price</label>
          <input
            type="number"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>

      <h3>All Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <p>{event.eventName}</p>
            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
            <button onClick={() => handleUpdateEvent(event._id)}>Update</button>
            <button onClick={() => handleCancelEvent(event._id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
