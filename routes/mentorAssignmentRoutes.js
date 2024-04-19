const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

router.put('/assign/:studentId/:mentorId', async (req, res) => {
  try {
    const { studentId, mentorId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.mentor = mentorId;
    await student.save();

    res.status(200).json({ message: 'Mentor assigned successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;