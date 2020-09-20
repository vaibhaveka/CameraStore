const mongoose = require('mongoose');

const cart = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  
  cart: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('cart', cart);
