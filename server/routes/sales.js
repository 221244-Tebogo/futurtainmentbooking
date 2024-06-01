const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Sale = require("../models/Sale.js");

// Get all sales (admin only)
router.get("/", auth, async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
