const express = require('express');
const router = express.Router();
const Availability = require('../models/Availability');

// @route POST /api/availability
// @desc Create user availability
router.post('/', async (req, res) => {
  const { user, start, end, duration, attendees, scheduledSlots } = req.body;
  
  try {
    const newAvailability = new Availability({
      user,
      start,
      end,
      duration,
      attendees,
      scheduledSlots
    });

    const savedAvailability = await newAvailability.save();
    res.status(201).json(savedAvailability);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route GET /api/availability
// @desc Get all user availabilities
router.get('/', async (req, res) => {
  try {
    const availabilities = await Availability.find();
    res.json(availabilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
