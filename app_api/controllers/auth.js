const jwt    = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User   = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { username, password, role = 'user' } = req.body;

    if (await User.findOne({ username })) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const user = new User({ username, password, role });
    await user.save();

    const token = jwt.sign(
      { id: user._id, role: user.role }, // Include role here
      process.env.JWT_SECRET || 'secretkey'
    );

    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role }, // Include role here too
      process.env.JWT_SECRET || 'secretkey'
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }
};
