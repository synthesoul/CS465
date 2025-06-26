const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  hotel: { type: String, required: true },
  stars: { type: Number, required: true }
});

module.exports = mongoose.model('Trip', tripSchema);
