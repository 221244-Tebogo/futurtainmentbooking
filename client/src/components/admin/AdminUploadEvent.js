//UPLOADS EVENT

import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminUploadEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventCategory: "Entertainment(Tickets)",
    time: "",
    seats: "",
    venue: "",
    ticketPrice: "",
  });
  const [eventCount, setEventCount] = useState(0);
  const maxEvents = 5;

  const eventCategories = [
    "Entertainment(Tickets)",
    "Music",
    "Kids events",
    "Comedy",
    "Fashion shows",
  ];

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, eventCategory: value });
  };

  useEffect(() => {
    const fetchEventCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/events/count"
        );
        setEventCount(response.data.count);
      } catch (error) {
        console.error("Error fetching event count", error);
      }
    };
    fetchEventCount();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (eventCount >= maxEvents) {
      alert("Maximum number of events reached. You cannot upload more events.");
      return;
    }
    try {
      await axios.post(
        "http://localhost:5001/api/admin/upload-event",
        formData
      );
      setEventCount(eventCount + 1);
      alert("Event uploaded successfully!");
    } catch (error) {
      console.error("Error uploading event", error);
    }
  };

  return (
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
          onChange={handleCategoryChange}
          required
        >
          {eventCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
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
      <button type="submit">Upload Event</button>
    </form>
  );
};

export default AdminUploadEvent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UploadEvent = () => {
//   const [formData, setFormData] = useState({
//     eventName: "",
//     eventCategory: "Entertainment(Tickets)",
//     time: "",
//     seats: "",
//     venue: "",
//     ticketPrice: "",
//   });
//   const [eventCount, setEventCount] = useState(0);
//   const maxEvents = 5;

//   const eventCategories = [
//     "Entertainment(Tickets)",
//     "Music",
//     "Kids events",
//     "Comedy",
//     "Fashion shows",
//   ];

//   const handleCategoryChange = (e) => {
//     const { value } = e.target;
//     setFormData({ ...formData, eventCategory: value });
//   };

//   useEffect(() => {
//     // Fetch current number of events from the backend (example URL)
//     const fetchEventCount = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5001/api/events/count"
//         );
//         setEventCount(response.data.count);
//       } catch (error) {
//         console.error("Error fetching event count", error);
//       }
//     };
//     fetchEventCount();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (eventCount >= maxEvents) {
//       alert("Maximum number of events reached. You cannot upload more events.");
//       return;
//     }
//     try {
//       // Handle form submission
//       await axios.post("http://localhost:5001/api/events", formData);
//       setEventCount(eventCount + 1);
//       alert("Event uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading event", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Event Name</label>
//         <input
//           type="text"
//           name="eventName"
//           value={formData.eventName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Event Category</label>
//         <select
//           name="eventCategory"
//           value={formData.eventCategory}
//           onChange={handleCategoryChange}
//           required
//         >
//           {eventCategories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//           {formData.eventCategory === "Music" && (
//             <option value="South African Music for 21-35 years">
//               South African Music for 21-35 years
//             </option>
//           )}
//         </select>
//       </div>
//       <div>
//         <label>Time</label>
//         <input
//           type="text"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Seats Numbers</label>
//         <input
//           type="number"
//           name="seats"
//           value={formData.seats}
//           onChange={handleChange}
//           required
//           min="100"
//           max="500"
//         />
//       </div>
//       <div>
//         <label>Venue</label>
//         <input
//           type="text"
//           name="venue"
//           value={formData.venue}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Ticket Price</label>
//         <input
//           type="number"
//           name="ticketPrice"
//           value={formData.ticketPrice}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Upload Event</button>
//     </form>
//   );
// };

// export default UploadEvent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UploadEvent = () => {
//   const [formData, setFormData] = useState({
//     eventName: "",
//     eventCategory: "Entertainment(Tickets)",
//     time: "",
//     seats: "",
//     venue: "",
//     ticketPrice: "",
//   });
//   const [eventCount, setEventCount] = useState(0);
//   const maxEvents = 5;

//   const eventCategories = [
//     "Entertainment(Tickets)",
//     "Music",
//     "Kids events",
//     "Comedy",
//     "Fashion shows",
//   ];

//   const handleCategoryChange = (e) => {
//     const { value } = e.target;
//     setFormData({ ...formData, eventCategory: value });
//   };

//   useEffect(() => {
//     // Fetch current number of events from the backend (example URL)
//     const fetchEventCount = async () => {
//       try {
//         const response = await axios.get("/api/events/count");
//         setEventCount(response.data.count);
//       } catch (error) {
//         console.error("Error fetching event count", error);
//       }
//     };
//     fetchEventCount();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (eventCount >= maxEvents) {
//       alert("Maximum number of events reached. You cannot upload more events.");
//       return;
//     }
//     try {
//       // Handle form submission
//       await axios.post("/api/events", formData);
//       setEventCount(eventCount + 1);
//       alert("Event uploaded successfully!");
//     } catch (error) {
//       console.error("Error uploading event", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Event Name</label>
//         <input
//           type="text"
//           name="eventName"
//           value={formData.eventName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Event Category</label>
//         <select
//           name="eventCategory"
//           value={formData.eventCategory}
//           onChange={handleCategoryChange}
//           required
//         >
//           {eventCategories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//           {formData.eventCategory === "Music" && (
//             <option value="South African Music for 21-35 years">
//               South African Music for 21-35 years
//             </option>
//           )}
//         </select>
//       </div>
//       <div>
//         <label>Time</label>
//         <input
//           type="text"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Seats Numbers</label>
//         <input
//           type="number"
//           name="seats"
//           value={formData.seats}
//           onChange={handleChange}
//           required
//           min="100"
//           max="500"
//         />
//       </div>
//       <div>
//         <label>Venue</label>
//         <input
//           type="text"
//           name="venue"
//           value={formData.venue}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Ticket Price</label>
//         <input
//           type="number"
//           name="ticketPrice"
//           value={formData.ticketPrice}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Upload Event</button>
//     </form>
//   );
// };

// export default UploadEvent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UploadPet.css"; // Import the CSS file

// const UploadPet = () => {
//   const [form, setForm] = useState({
//     name: "",
//     animalType: "",
//     age: "",
//     breed: "",
//     sex: "",
//     colour: "",
//   });
//   const [userId, setUserId] = useState("");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user._id) {
//       setUserId(user._id);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = {
//         ...form,
//         userListed: userId,
//         animalType: form.animalType.toLowerCase(),
//       };
//       await axios.post("/api/petlisting/add", data);
//       alert("Pet listing added successfully");
//     } catch (error) {
//       console.error("Error adding pet listing", error);
//       alert("Failed to add pet listing");
//     }
//   };

//   return (
//     <div className="upload-pet-container">
//       <h2>Upload Pet Listing</h2>
//       <form className="upload-pet-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Pet Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <select
//           name="animalType"
//           value={form.animalType}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Animal Type</option>
//           <option value="dog">Dog</option>
//           <option value="cat">Cat</option>
//           <option value="rabbit">Rabbit</option>
//           <option value="bird">Bird</option>
//           <option value="reptile">Reptile</option>
//           <option value="other">Other</option>
//         </select>
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={form.age}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="breed"
//           placeholder="Breed"
//           value={form.breed}
//           onChange={handleChange}
//           required
//         />
//         <select name="sex" value={form.sex} onChange={handleChange} required>
//           <option value="">Select Sex</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <input
//           type="text"
//           name="colour"
//           placeholder="Colour"
//           value={form.colour}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Add Listing</button>
//       </form>
//     </div>
//   );
// };

// export default UploadPet;
