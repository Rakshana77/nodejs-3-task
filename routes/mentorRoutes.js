const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentorModel');

router.post('/mentors', async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.status(201).json({ mentor });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
