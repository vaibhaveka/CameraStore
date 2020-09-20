const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
});

module.exports = mongoose.model('users', userSchema);



