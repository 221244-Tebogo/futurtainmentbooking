import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import EventCard from "../../components/EventCard/EventCard";
import "./EventsFilter.css";

const EventsFilter = () => {
  const { type } = useParams();
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); // Get the logged-in user

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events");
        setEvents(response.data);
        filterEvents(response.data, type.toLowerCase());
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };
    fetchEvents();
  }, [type]);

  const filterEvents = (allEvents, type) => {
    if (type === "all") {
      setFilteredEvents(allEvents);
    } else {
      const filtered = allEvents.filter(
        (event) => event.eventCategory.toLowerCase() === type.toLowerCase()
      );
      setFilteredEvents(filtered);
    }
  };

  const handleFilter = (filterType) => {
    filterEvents(events, filterType.toLowerCase());
  };

  return (
    <div className="events-filter">
      <h2>Matching Events - {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div className="filter-buttons">
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("entertainment(tickets)")}>
          Entertainment(Tickets)
        </button>
        <button onClick={() => handleFilter("music")}>Music</button>
        <button onClick={() => handleFilter("kids events")}>Kids Events</button>
        <button onClick={() => handleFilter("comedy")}>Comedy</button>
        <button onClick={() => handleFilter("fashion shows")}>
          Fashion Shows
        </button>
      </div>
      <div className="event-cards">
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} userId={user._id} />
        ))}
      </div>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default EventsFilter;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import PetCard from "../../components/EventCard/EventCard"; // Import PetCard
// import "./PetMatching.css";

// const PetMatching = () => {
//   const { type } = useParams();
//   const [pets, setPets] = useState([]);
//   const [filteredPets, setFilteredPets] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user")); // Get the logged-in user

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await axios.get("/api/petlisting");
//         const approvedPets = response.data.filter((pet) => pet.approved);
//         setPets(approvedPets);
//         filterPets(approvedPets, type.toLowerCase());
//       } catch (error) {
//         console.error("Error fetching pets", error);
//       }
//     };
//     fetchPets();
//   }, [type]);

//   const filterPets = (allPets, type) => {
//     if (type === "all") {
//       setFilteredPets(allPets);
//     } else {
//       const filtered = allPets.filter(
//         (pet) => pet.animalType.toLowerCase() === type.toLowerCase()
//       );
//       setFilteredPets(filtered);
//     }
//   };

//   const handleFilter = (filterType) => {
//     filterPets(pets, filterType.toLowerCase());
//   };

//   return (
//     <div className="pet-matching">
//       <h2>Matching Pets - {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
//       <div className="filter-buttons">
//         <button onClick={() => handleFilter("all")}>All</button>
//         <button onClick={() => handleFilter("dog")}>Dogs</button>
//         <button onClick={() => handleFilter("cat")}>Cats</button>
//         <button onClick={() => handleFilter("rabbit")}>Rabbits</button>
//         <button onClick={() => handleFilter("bird")}>Birds</button>
//         <button onClick={() => handleFilter("reptile")}>Reptiles</button>
//         <button onClick={() => handleFilter("other")}>Other</button>
//       </div>
//       <div className="pet-cards">
//         {filteredPets.map((pet) => (
//           <PetCard key={pet._id} pet={pet} userId={user._id} />
//         ))}
//       </div>
//       <Link to="/home">Back to Home</Link>
//     </div>
//   );
// };

// export default PetMatching;
