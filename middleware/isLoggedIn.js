const jwt = require('jsonwebtoken');
const User = require('../models/user');

const isLoggedIn = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        // Verify token and extract user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Find user by ID and exclude sensitive fields
        req.user = await User.findById(decoded.user.id).select('-password'); 
        
        if (!req.user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        next(); 
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = isLoggedIn;

