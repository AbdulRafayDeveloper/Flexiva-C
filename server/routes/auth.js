// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

// Register
router.post('/register', async (req, res) => {
    try {
      const { username, password, role } = req.body;
  
      const user = new User({ username, password, role });
      await user.save();
  
      res.json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  
  // Login
  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;