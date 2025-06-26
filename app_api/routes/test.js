const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/admin', verifyToken, (req, res) => {
  if (req.user?.administrator) {
    res.status(200).json({ message: 'You are an admin and can access this route.' });
  } else {
    res.status(403).json({ message: 'Admin access only.' });
  }
});

module.exports = router;
