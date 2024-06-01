const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["scheduled", "cancelled"],
    default: "scheduled",
  },
  likedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [commentSchema],
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
