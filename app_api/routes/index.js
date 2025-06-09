// app_api/routes/index.js
const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.get('/trips', tripsController.tripsList);
// Optionally support slug or id routes like:
// router.get('/trips/:tripid', tripsController.tripsReadOne);
router.get('/ping', (req, res) => {
  res.status(200).json({ status: "API is alive" });
});

module.exports = router;
