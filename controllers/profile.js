const User = require('../models/user');
const Review = require('../models/Review');

// @desc GET - User Profile
const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Get user ID from JWT token (assuming middleware sets req.user)

        // Fetch user from database
        const user = await User.findById(userId).populate('reviews');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Send user data as response
        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

module.exports = { getUserProfile };
