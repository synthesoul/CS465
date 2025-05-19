const express = require('express');
const path = require('path');
const app = express();

// Import travel route
const travelRouter = require('./app_server/routes/travel');

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/travel', travelRouter);

// Redirect root to travel
app.get('/', (req, res) => {
  res.redirect('/travel');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
