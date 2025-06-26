const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const medicineSchema = new mongoose.Schema({
  medicines_id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  medicine_name: String,
  dosage: String,
  period: String,
  posology: String,
  observation: String,
  user_id: { type: String, required: true }
});

module.exports = mongoose.model('Medicine', medicineSchema);
