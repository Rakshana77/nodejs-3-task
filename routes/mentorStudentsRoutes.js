const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

router.get('/mentor/:mentorId/students', async (req, res) => {
  try {
    const { mentorId } = req.params;
    const students = await Student.find({ mentor: mentorId });
    res.status(200).json({ students });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;