// app_api/models/trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  category: String,
  image: String,
  price: Number,
  duration: Number,
  description: String,
  start: Date,
  continent: String
});

mongoose.model('Trip', tripSchema);
