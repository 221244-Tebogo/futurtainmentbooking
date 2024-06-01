const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const { isAdmin } = require("../middleware/auth"); // Assuming you have an isAdmin middleware

// Admin routes to upload events, etc.

router.post("/upload-event", isAdmin, async (req, res) => {
  const { eventName, eventCategory, time, seats, venue, ticketPrice } =
    req.body;
  try {
    const newEvent = new Event({
      eventName,
      eventCategory,
      time,
      seats,
      venue,
      ticketPrice,
    });
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error uploading event", error });
  }
});

module.exports = router;
