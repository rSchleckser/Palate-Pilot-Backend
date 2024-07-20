const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

// Import controllers and models
const { getUserProfile, updateUserProfile } = require('../controllers/profile');
const User = require('../models/user');
const isLoggedIn = require('../middleware/isLoggedIn');

// @desc GET - User Profile Page
router.get('/:userId', getUserProfile);

// @route POST /
// @desc Register user
router.post(
  '/',
  [
    check('username', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      // Create new user
      user = new User({ username, email, password });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Return response
      res.status(201).json({ msg: 'User Registered' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(error);
    }
  }
);

// @desc PUT - Update User Profile
// router.put('/:userId', isLoggedIn, updateUserProfile);

module.exports = router;
