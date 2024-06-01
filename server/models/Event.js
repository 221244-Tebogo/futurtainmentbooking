const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventCategory: { type: String, required: true },
  time: { type: String, required: true },
  seats: { type: Number, required: true },
  venue: { type: String, required: true },
  ticketPrice: { type: Number, required: true },
  likedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      name: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Event", eventSchema);

// const mongoose = require('mongoose');

// const PetListingSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     animalType: { type: String, required: true, enum: ['dog', 'cat', 'rabbit', 'bird', 'reptile', 'other'] },
//     age: { type: Number, required: true },
//     breed: { type: String, required: true },
//     sex: { type: String, required: true, enum: ['male', 'female'] },
//     colour: { type: String, required: true },
//     comments: [{
//         userId: { type: String },
//         name: { type: String },
//         comment: { type: String }
//     }],
//     likedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//     userListed: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     approved: { type: Boolean, default: false }
// });

// module.exports = mongoose.model('PetListing', PetListingSchema);
