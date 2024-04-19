const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentorModel');

router.get('/student/:studentId/mentor', async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const mentor = await Mentor.findById(student.mentor);
    res.status(200).json({ mentor });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
