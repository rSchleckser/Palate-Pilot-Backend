const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/profile');
const isLoggedIn = require('../middleware/isLoggedIn');

const router = express.Router();
const { check, validationResult } = require('express-validator');

//@desc GET - User Profile Page
router.get('/:userId', getUserProfile);

// @route POST /
// @desc Register user

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Profile route');
  }
);

// // @desc PUT - Update User Profile
// router.put('/:userId', updateUserProfile);


module.exports = router;
