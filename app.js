const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Connect to MongoDB
require('./app_api/models/db');

const app = express();

console.log("Loading app.js");
console.log("Current working dir:", __dirname);

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Mount app_server routes
const travelRouter = require('./app_server/routes/travel');
console.log("Mounting /travel route...");
app.use('/travel', travelRouter);

// Mount API routes
const apiRouter = require('./app_api/routes/index');
console.log("Mounting /api route...");
app.use('/api', apiRouter);

// Redirect root to /travel
app.get('/', (req, res) => {
  res.redirect('/travel');
});

// Start server
app.listen(3000, '127.0.0.1', () => {
  console.log('Server started on http://127.0.0.1:3000');
});
