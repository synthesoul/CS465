const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// Connect to MongoDB
require('./app_api/models/db');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login', 'index.html'));
});

// Mount app_server routes
const travelRouter = require('./app_server/routes/travel');
app.use('/travel', travelRouter);

// Mount API routes
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

// Redirect root to /travel
app.get('/', (req, res) => {
  res.redirect('/travel');
});

// Start server
const PORT = 3000;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`✅ Server started on http://127.0.0.1:${PORT}`);
});
