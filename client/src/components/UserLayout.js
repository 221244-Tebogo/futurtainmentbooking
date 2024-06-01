import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home/Home";
import UserEvents from "../routes/Events/UserEvents";
import EventsFilter from "../routes/EventsFilter/EventsFilter";
import EventDetails from "../routes/EventDetails/EventDetails";
import ContactUs from "../routes/ContactUs/ContactUs";
import Navbar from "../components/Navbar/Navbar";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<UserEvents />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/eventsfilter/:type" element={<EventsFilter />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
};

export default UserLayout;
