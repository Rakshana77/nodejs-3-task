const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

router.post('/students', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
