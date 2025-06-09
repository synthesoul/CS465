const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  continent: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  image: { type: String }
});

// Avoid OverwriteModelError by checking if model exists
mongoose.models.Trip || mongoose.model('Trip', tripSchema);
