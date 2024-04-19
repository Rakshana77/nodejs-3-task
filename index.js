// index.js

const express = require('express');
const mongoose = require('mongoose');
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const mentorAssignmentRoutes = require('./routes/mentorAssignmentRoutes');
const mentorStudentsRoutes = require('./routes/mentorStudentsRoutes');
const studentMentorRoutes = require('./routes/studentMentorRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/mentor_student_db')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


// Define routes
app.use('/api', mentorRoutes);
app.use('/student', studentRoutes);
app.use('/assign', assignmentRoutes);
app.use('/mentorassign', mentorAssignmentRoutes);
app.use('/students', mentorStudentsRoutes);
app.use('/mentors', studentMentorRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
