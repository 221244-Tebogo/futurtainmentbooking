import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminUploadEvent from "./AdminUploadEvent";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [editEventId, setEditEventId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    seats: "",
    ticketPrice: "",
  });
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        addLog("Fetching events...");
        const response = await axios.get("http://localhost:5001/api/events");
        addLog("Events fetched: " + JSON.stringify(response.data));
        setEvents(response.data);
      } catch (error) {
        addLog("Error fetching events: " + error.message);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/events/delete/${id}`);
      setEvents(events.filter((event) => event._id !== id));
      addLog("Event deleted: " + id);
    } catch (error) {
      addLog("Error deleting event: " + error.message);
    }
  };

  const handleEdit = (event) => {
    setEditEventId(event._id);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      venue: event.venue,
      seats: event.seats,
      ticketPrice: event.ticketPrice,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5001/api/events/update/${editEventId}`,
        formData
      );
      setEvents(
        events.map((event) =>
          event._id === editEventId ? { ...event, ...formData } : event
        )
      );
      addLog("Event updated: " + editEventId);
      setEditEventId(null);
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        venue: "",
        seats: "",
        ticketPrice: "",
      });
    } catch (error) {
      addLog("Error updating event: " + error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventAdded = (newEvent) => {
    setEvents([...events, newEvent]);
    addLog("New event added: " + JSON.stringify(newEvent));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminUploadEvent onEventAdded={handleEventAdded} />
      <h2>Existing Events</h2>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Venue</th>
              <th>Seats</th>
              <th>Ticket Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.venue}</td>
                <td>{event.seats}</td>
                <td>{event.ticketPrice}</td>
                <td>
                  <button onClick={() => handleEdit(event)}>Edit</button>
                  <button onClick={() => handleDelete(event._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editEventId && (
        <form onSubmit={handleUpdate}>
          <h3>Edit Event</h3>
          <div>
            <label>Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
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
            <label>Seats</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              required
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
          <button type="submit">Update Event</button>
        </form>
      )}
      <h2>Logs</h2>
      <div
        style={{
          maxHeight: "200px",
          overflowY: "scroll",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
