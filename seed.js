const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/travlr';
mongoose.connect(dbURI);

const Travel = require('./app_api/models/travel');


const seedTrips = [
  {
    _id: 'B0101',
    name: 'Cancun',
    description: 'Emerald Bay, 3-stars',
    price: 749.00,
    location: 'Beaches',
    dates: ['2021-02-14'],
    nights: 4,
    days: 5
  },
  {
    _id: 'B0103',
    name: 'Barbados',
    description: 'Castaway Cove, 4-stars',
    price: 1299.00,
    location: 'Beaches',
    dates: ['2021-02-28'],
    nights: 5,
    days: 6
  },
  {
    _id: 'B0401',
    name: 'Panama City',
    description: 'Sunseeker Surf, 4-stars',
    price: 1199.00,
    location: 'Beaches',
    dates: ['2021-03-21'],
    nights: 4,
    days: 5
  },
  {
    _id: 'B0701',
    name: 'Tahiti',
    description: 'Hedonist Heaven, 5-stars',
    price: 1799.00,
    location: 'Beaches',
    dates: ['2021-03-28'],
    nights: 6,
    days: 7
  },
  {
    _id: 'B0901',
    name: 'French Riviera',
    description: 'Chateau Royal, 5-stars',
    price: 2499.00,
    location: 'Beaches',
    dates: ['2021-04-11'],
    nights: 5,
    days: 6
  }
];

(async () => {
  await Travel.deleteMany({});
  await Travel.insertMany(seedTrips);
  console.log('✅ Seeded travel data.');
  mongoose.disconnect();
})();
