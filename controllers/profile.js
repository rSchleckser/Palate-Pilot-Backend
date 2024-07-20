const User = require('../models/user');

// @desc GET - User Profile
const getUserProfile = async (req, res) => {
    try {
        // const user = await User.findById(req.params.userId).select('-password'); // Exclude password from the response
        // if (!user) {
        //     return res.status(404).json({ msg: 'User not found' });
        // }
        res.status(200).send('Pass');
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

module.exports = { getUserProfile };
