const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/travlr';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`✅ Mongoose connected to ${dbURI}`);
});

// Register all models here
require('./travel');
require('./user');
