const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { check, validationResult } = require('express-validator');

// Import controllers and models
const { getUserProfile, updateUserProfile } = require('../controllers/profile');
const User = require('../models/user');
const isLoggedIn = require('../middleware/isLoggedIn');

// @desc GET - User Profile Page
router.get('/:userId', isLoggedIn, getUserProfile);



// @desc PUT - Update User Profile
// router.put('/:userId', isLoggedIn, updateUserProfile);

module.exports = router;