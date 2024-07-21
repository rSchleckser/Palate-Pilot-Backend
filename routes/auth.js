const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const authController = require('../controllers/authController');
const { check } = require('express-validator');

// @route GET /auth
// @desc Get authenticated user
router.get('/', isLoggedIn, authController.getAuthenticatedUser);

// Register new User
// @route POST /auth/signup
// @desc Register user
router.post('/signup', [
    check('username', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], authController.registerUser);

// Login existing User
// @route POST /auth/login
// @desc Authenticate user & get token
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], authController.loginUser);

module.exports = router;
