const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, surname, email, password, role } = req.body;

  if (
    !name ||
    !surname ||
    !email ||
    !password ||
    (!email.endsWith("@futurtainment.com") && !role)
  ) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    let user = await User.findOne({ email });
    let admin = await Admin.findOne({ email });

    if (user || admin) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (email.endsWith("@futurtainment.com")) {
      const newAdmin = new Admin({ name, surname, email, password });

      const salt = await bcrypt.genSalt(10);
      newAdmin.password = await bcrypt.hash(password, salt);

      await newAdmin.save();

      return res.json({
        user: newAdmin,
        message: "Admin registered successfully",
        redirect: "/admin/home",
      });
    }

    user = new User({ name, surname, email, password, role });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ user, token, redirect: "/home" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    let user = await User.findOne({ email });
    let admin = await Admin.findOne({ email });

    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const payload = { user: { id: admin.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({ user: admin, token, redirect: "/admin/home" });
    }

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({ user, token, redirect: "/home" });
    }

    return res.status(400).json({ message: "Invalid credentials" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const Admin = require('../models/Admin');

// const router = express.Router();

// router.post('/register', async (req, res) => {
//     const { name, surname, email, password, role } = req.body;

//     // Validate request body
//     if (!name || !surname || !email || !password || (!email.endsWith('@ppadmin.com') && !role)) {
//         return res.status(400).json({ message: 'Please enter all fields' });
//     }

//     try {
//         // Check if the user already exists in the User or Admin collection
//         let user = await User.findOne({ email });
//         let admin = await Admin.findOne({ email });

//         if (user || admin) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // If email ends with '@ppadmin.com', add to Admin collection
//         if (email.endsWith('@ppadmin.com')) {
//             const newAdmin = new Admin({ name, surname, email, password });

//             const salt = await bcrypt.genSalt(10);
//             newAdmin.password = await bcrypt.hash(password, salt);

//             await newAdmin.save();

//             return res.json({ user: newAdmin, message: 'Admin registered successfully', redirect: '/admin/home' });
//         }

//         // Otherwise, add to User collection
//         user = new User({ name, surname, email, password, role });

//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         await user.save();

//         const payload = { user: { id: user.id } };
//         const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ user, token, redirect: '/home' }); // Redirect normal users to Home
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     // Validate request body
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Please enter all fields' });
//     }

//     try {
//         // Check if the user exists in the User or Admin collection
//         let user = await User.findOne({ email });
//         let admin = await Admin.findOne({ email });

//         // If the user is an admin
//         if (admin) {
//             const isMatch = await bcrypt.compare(password, admin.password);
//             if (!isMatch) {
//                 return res.status(400).json({ message: 'Invalid credentials' });
//             }

//             const payload = { user: { id: admin.id } };
//             const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

//             return res.json({ user: admin, token, redirect: '/admin/home' });
//         }

//         // If the user is a regular user
//         if (user) {
//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch) {
//                 return res.status(400).json({ message: 'Invalid credentials' });
//             }

//             const payload = { user: { id: user.id } };
//             const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

//             return res.json({ user, token, redirect: '/home' }); // Redirect normal users to Home
//         }

//         // If no user is found in either collection
//         return res.status(400).json({ message: 'Invalid credentials' });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;
