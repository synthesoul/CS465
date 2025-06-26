const express = require('express');
const router = express.Router();

// Controllers
const authCtrl = require('../controllers/auth');
const travelRoutes = require('./travel');
const testRoutes = require('./test');

// Auth Routes
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

// Travel API Routes (CRUD)
router.use('/travel', travelRoutes);

// Test Route (optional)
router.use('/test', testRoutes);

module.exports = router;
