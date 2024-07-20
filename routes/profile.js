const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/profile');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
  
//@desc GET - User Profile Page
router.get('/:userId', getUserProfile);

// // @desc PUT - Update User Profile
// router.put('/:userId', updateUserProfile);

module.exports = router;
