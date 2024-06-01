const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  roles: { type: [String], default: ["user"] },
});

module.exports = mongoose.model("User", userSchema);

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   surname: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, required: true, enum: ["individual", "company"] },
//   likedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
//   eventsListed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
// });

// module.exports = mongoose.model("User", UserSchema);

// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     surname: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, required: true, enum: ['individual', 'company'] },
//     petsLiked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PetListing' }],
//     petsListed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PetListing' }]
// });

// module.exports = mongoose.model('User', UserSchema);
