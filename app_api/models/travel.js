const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  _id: { type: String, required: true },  // e.g., B0101
  name: { type: String, required: true },
  description: String,                    // resort name + stars
  price: Number,                          // per person
  location: String,                       // category (e.g., Beaches)
  dates: [String],                        // start dates
  nights: Number,
  days: Number
});

// Export the model
module.exports = mongoose.model('Travel', travelSchema);
