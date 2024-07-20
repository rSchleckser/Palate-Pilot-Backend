const { User } = require('../models/user');

// @desc GET - User Profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('user');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

module.exports = { getUserProfile};
