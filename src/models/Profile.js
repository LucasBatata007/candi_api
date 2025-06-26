const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const profileSchema = new mongoose.Schema({
  user_id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  username: String,
  birth_date: Date,
  cancer_id: String,
  image_uri: String
});

module.exports = mongoose.model('Profile', profileSchema);
