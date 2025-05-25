const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

console.log("Loading app.js");
console.log("Current working dir:", __dirname);

// Set view engine to HBS and register partials
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Import and mount routes
const travelRouter = require('./app_server/routes/travel');
console.log("Mounting /travel route...");
app.use('/travel', travelRouter);

// Redirect root to /travel
app.get('/', (req, res) => {
  res.redirect('/travel');
});

// Start server
app.listen(3000, '127.0.0.1', () => {
  console.log('Server started on http://127.0.0.1:3000');
});
