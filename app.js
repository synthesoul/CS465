const express = require('express');
const path = require('path');
const app = express();

console.log("Loading app.js");
console.log("Current working dir:", __dirname);

// Load routers
const travelRouter = require('./app_server/routes/travel');

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
console.log("Mounting /travel route...");
app.use('/travel', travelRouter);

// Redirect root to /travel
app.get('/', (req, res) => {
  res.redirect('/travel');
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Server started on http://127.0.0.1:3000');
});
