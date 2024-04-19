const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  // Add new options for the MongoDB Node.js driver version 4.0.0
  serverSelectionTimeoutMS: 5000,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mentorSchema = new mongoose.Schema({
  name: String,
});

const studentSchema = new mongoose.Schema({
  name: String,
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    default: null,
  },
});

const Mentor = mongoose.model('Mentor', mentorSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = { Mentor, Student };
