const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const User = require('./user');
        const Review = require('./review');
        const Country = require('./country');
        const Food = require('./food');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected')
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    User,
    Review,
    Food,
    Country
}
