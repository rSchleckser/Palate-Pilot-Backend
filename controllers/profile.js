const User = require('../models/user');

// @desc GET - User Profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)

        // res.status(200).send('Pass');
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

module.exports = { getUserProfile };
