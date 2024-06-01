const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Fetch all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Like an event
router.post("/like/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.likedUsers.push(req.body.userId); // Assuming userId is passed in the request body
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Comment on an event
router.post("/comment/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    event.comments.push(req.body); // Assuming comment is passed in the request body
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

// // Create a new event
// router.post("/", async (req, res) => {
//   const { eventName, eventCategory, time, seats, venue, ticketPrice } =
//     req.body;

//   try {
//     const newEvent = new Event({
//       eventName,
//       eventCategory,
//       time,
//       seats,
//       venue,
//       ticketPrice,
//     });
//     await newEvent.save();

//     res.json(newEvent);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

// // Get all events
// router.get("/", async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.json(events);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

// // Get event by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id)
//       .populate("likedUsers", "name")
//       .populate("comments.userId", "name");
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }
//     res.json(event);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

// // Update an event
// router.put("/:id", async (req, res) => {
//   const { eventName, eventCategory, time, seats, venue, ticketPrice, status } =
//     req.body;

//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }

//     event.eventName = eventName || event.eventName;
//     event.eventCategory = eventCategory || event.eventCategory;
//     event.time = time || event.time;
//     event.seats = seats || event.seats;
//     event.venue = venue || event.venue;
//     event.ticketPrice = ticketPrice || event.ticketPrice;
//     event.status = status || event.status;

//     await event.save();
//     res.json(event);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

// // Delete an event
// router.delete("/:id", async (req, res) => {
//   try {
//     await Event.findByIdAndRemove(req.params.id);
//     res.json({ msg: "Event deleted" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

// // Cancel an event
// router.put("/cancel/:id", async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ msg: "Event not found" });
//     }

//     event.status = "cancelled";
//     await event.save();
//     res.json({ msg: "Event cancelled" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

// // Like an event
// router.post("/like/:id", async (req, res) => {
//   const { userId } = req.body;
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }

//     if (!event.likedUsers.includes(userId)) {
//       event.likedUsers.push(userId);
//       await event.save();

//       const user = await User.findById(userId);
//       if (user && !user.likedEvents.includes(req.params.id)) {
//         user.likedEvents.push(req.params.id);
//         await user.save();
//       }
//     }

//     res.json({ message: "Event liked successfully" });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

// // Comment on an event
// router.post("/comment/:id", async (req, res) => {
//   const { userId, comment } = req.body;
//   try {
//     const event = await Event.findById(req.params.id);
//     if (!event) {
//       return res.status(404).json({ message: "Event not found" });
//     }

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const commentObject = {
//       userId: userId.toString(),
//       name: user.name,
//       comment: comment.toString(),
//     };
//     event.comments.push(commentObject);
//     await event.save();

//     res.json({ message: "Comment added successfully" });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// });

// module.exports = router;

//OLD VERSIONS
// const express = require('express');
// const PetListing = require('../models/PetListing');
// const User = require('../models/User');

// const router = express.Router();

// // Create a new pet listing
// router.post('/add', async (req, res) => {
//     const { name, animalType, age, breed, sex, colour, userListed } = req.body;

//     try {
//         const newPetListing = new PetListing({ name, animalType, age, breed, sex, colour, userListed });
//         await newPetListing.save();

//         // Update the user's petsListed array
//         const user = await User.findById(userListed);
//         user.petsListed.push(newPetListing.id);
//         await user.save();

//         res.json(newPetListing);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// // Get all unapproved pet listings
// router.get('/unapproved', async (req, res) => {
//     try {
//         const listings = await PetListing.find({ approved: false });
//         res.json(listings);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// // Approve a pet listing
// router.put('/approve/:id', async (req, res) => {
//     try {
//         const listing = await PetListing.findById(req.params.id);
//         if (!listing) {
//             return res.status(404).json({ message: 'Listing not found' });
//         }

//         listing.approved = true;
//         await listing.save();

//         res.json({ message: 'Listing approved' });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// // Get all pet listings
// router.get('/', async (req, res) => {
//     try {
//         const listings = await PetListing.find();
//         res.json(listings);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// // Get pet listing by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const listing = await PetListing.findById(req.params.id).populate('likedUsers', 'name').populate('comments.userId', 'name');
//         if (!listing) {
//             return res.status(404).json({ message: 'Listing not found' });
//         }
//         res.json(listing);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// // Like a pet listing
// router.post('/like/:id', async (req, res) => {
//     const { userId } = req.body;
//     try {
//         const listing = await PetListing.findById(req.params.id);
//         if (!listing) {
//             return res.status(404).json({ message: 'Listing not found' });
//         }

//         if (!listing.likedUsers.includes(userId)) {
//             listing.likedUsers.push(userId);
//             await listing.save();

//             const user = await User.findById(userId);
//             if (user && !user.petsLiked.includes(req.params.id)) {
//                 user.petsLiked.push(req.params.id);
//                 await user.save();
//             }
//         }

//         res.json({ message: 'Pet liked successfully' });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// // Comment on a pet listing
// router.post('/comment/:id', async (req, res) => {
//     const { userId, comment } = req.body;
//     try {
//         const listing = await PetListing.findById(req.params.id);
//         if (!listing) {
//             return res.status(404).json({ message: 'Listing not found' });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const commentObject = { userId: userId.toString(), name: user.name, comment: comment.toString() };
//         listing.comments.push(commentObject);
//         await listing.save();

//         res.json({ message: 'Comment added successfully' });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;
