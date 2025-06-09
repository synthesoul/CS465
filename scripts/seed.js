const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('../app_api/models/trip');
const Trip = mongoose.model('Trip');

const seed = async () => {
  console.log('Connecting to MongoDB...');
  await mongoose.connect('mongodb://127.0.0.1:27017/travlr');
  console.log('Connected to MongoDB.');

  console.log('Reading trips.json...');
  const data = fs.readFileSync(path.join(__dirname, 'trips.json'), 'utf8');
  const trips = JSON.parse(data);
  console.log(`Read ${trips.length} trips.`);

  console.log('Clearing existing trips...');
  await Trip.deleteMany({});

  console.log('Seeding trips...');
  await Trip.insertMany(trips);
  console.log('Trips seeded successfully.');

  await mongoose.disconnect();
  console.log('Disconnected.');
};

seed().catch((err) => {
  console.error('Seeding failed:', err);
});
