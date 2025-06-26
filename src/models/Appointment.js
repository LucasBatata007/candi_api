const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const appointmentSchema = new mongoose.Schema({
  appointment_id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  name: String,
  date: Date,
  obs: String,
  user_id: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
