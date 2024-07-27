const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

// @desc Get the authenticated user's profile
router.get('/profile', isLoggedIn, async (req, res) => {
    try {
        // The user is now available in req.user
        res.json(req.user);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
});

module.exports = router;

