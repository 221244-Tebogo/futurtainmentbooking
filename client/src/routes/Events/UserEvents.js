import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Events.css";
import EventCard from "../../components/EventCard/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/events");
        console.log("Fetched Events:", response.data); // Add this line
        setEvents(response.data);
        setFilteredEvents(response.data); // Initially set filtered events to all events
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };
    fetchEvents();
  }, []);

  // Function to filter events based on category
  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredEvents(events); // Show all events
    } else {
      const filtered = events.filter(
        (event) => event.eventCategory.toLowerCase() === category.toLowerCase()
      );
      setFilteredEvents(filtered);
    }
  };

  return (
    <div>
      <div className="all-events">
        <h2>Upcoming Events</h2>
        <div className="filter-buttons">
          {/* Filter buttons */}
          <button onClick={() => handleFilter("All")}>All</button>
          <button onClick={() => handleFilter("Entertainment(Tickets)")}>
            Entertainment(Tickets)
          </button>
          <button onClick={() => handleFilter("Music")}>Music</button>
          <button onClick={() => handleFilter("Kids events")}>
            Kids events
          </button>
          <button onClick={() => handleFilter("Comedy")}>Comedy</button>
          <button onClick={() => handleFilter("Fashion shows")}>
            Fashion shows
          </button>
        </div>
        <div className="event-cards">
          {/* Display filtered events */}
          {filteredEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              userId={localStorage.getItem("userId")} // Ensure this is set correctly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Events.css";
// import EventCard from "../../components/EventCard/EventCard";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/events");
//         setEvents(response.data);
//         setFilteredEvents(response.data); // Initially set filtered events to all events
//       } catch (error) {
//         console.error("Error fetching events", error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   // Function to filter events based on category
//   const handleFilter = (category) => {
//     if (category === "All") {
//       setFilteredEvents(events); // Show all events
//     } else {
//       const filtered = events.filter(
//         (event) => event.eventCategory.toLowerCase() === category.toLowerCase()
//       );
//       setFilteredEvents(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="all-events">
//         <h2>Upcoming Events</h2>
//         <div className="filter-buttons">
//           {/* Filter buttons */}
//           <button onClick={() => handleFilter("All")}>All</button>
//           <button onClick={() => handleFilter("Entertainment(Tickets)")}>
//             Entertainment(Tickets)
//           </button>
//           <button onClick={() => handleFilter("Music")}>Music</button>
//           <button onClick={() => handleFilter("Kids events")}>
//             Kids events
//           </button>
//           <button onClick={() => handleFilter("Comedy")}>Comedy</button>
//           <button onClick={() => handleFilter("Fashion shows")}>
//             Fashion shows
//           </button>
//         </div>
//         <div className="event-cards">
//           {/* Display filtered events */}
//           {filteredEvents.map((event) => (
//             <EventCard
//               key={event._id}
//               event={event}
//               userId={localStorage.getItem("userId")} // Ensure this is set correctly
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AllPets.css";
// import NavBar from "../../components/Navbar/Navbar";
// import PetCard from "../../components/PetCard/PetCard"; // Import the PetCard component

// const AllPets = () => {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await axios.get("/api/petlisting");
//         setPets(response.data);
//       } catch (error) {
//         console.error("Error fetching pets", error);
//       }
//     };
//     fetchPets();
//   }, []);

//   return (
//     <div>
//       <NavBar /> {/* Include the Navbar component */}
//       <div className="all-pets">
//         <h2>All Pets</h2>
//         <div className="pet-cards">
//           {pets.map((pet) => (
//             <PetCard
//               key={pet._id}
//               pet={pet}
//             /> /* Render PetCard component for each pet */
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllPets;

//OLD VERSION
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AllPets.css";
// import NavBar from "../../components/Navbar/Navbar";

// const AllPets = () => {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await axios.get("/api/petlisting");
//         setPets(response.data);
//       } catch (error) {
//         console.error("Error fetching pets", error);
//       }
//     };
//     fetchPets();
//   }, []);

//   return (
//     <div>
//       <NavBar />
//       <div className="all-pets">
//         <h2>All Pets</h2>
//         <div className="pet-cards">
//           {pets.map((pet) => (
//             <div key={pet._id} className="pet-card">
//               <h3>{pet.name}</h3>
//               <p>Type: {pet.animalType}</p>
//               <p>Age: {pet.age}</p>
//               <p>Breed: {pet.breed}</p>
//               <p>Sex: {pet.sex}</p>
//               <p>Colour: {pet.colour}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllPets;
