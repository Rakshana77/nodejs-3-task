const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');
const Mentor = require('../models/mentorModel');

router.post('/assign/:mentorId', async (req, res) => {
  try {
    const { mentorId } = req.params;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }

    const students = req.body.students;
    for (const studentId of students) {
      const student = await Student.findById(studentId);
      if (student && !student.mentor) {
        student.mentor = mentorId;
        await student.save();
      }
    }

    res.status(200).json({ message: 'Students assigned successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
