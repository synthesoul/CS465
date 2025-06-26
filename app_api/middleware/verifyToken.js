const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET || 'secretkey', (err, decoded) => {
    if (err) {
      console.error('❌ JWT verification failed:', err.message);
      return res.status(403).json({ message: 'Invalid token' });
    }

    console.log('✅ JWT verified:', decoded);  // Optional: helpful for debugging
    req.user = decoded;
    next();
  });
};
