const express = require('express');
const router = express.Router();
const travelCtrl = require('../controllers/travel');
const verifyToken = require('../middleware/verifyToken');

// Inline middleware to check admin role
function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin privileges required' });
  }
  next();
}

// Public endpoints
router.get('/', travelCtrl.list);
router.get('/:id', travelCtrl.detail);

// Admin-protected endpoints
router.post('/', verifyToken, requireAdmin, travelCtrl.create);
router.put('/:id', verifyToken, requireAdmin, travelCtrl.update);
router.delete('/:id', verifyToken, requireAdmin, travelCtrl.delete);

module.exports = router;
