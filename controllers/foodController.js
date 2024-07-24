const Food = require('../models/Food');
// const foods  = require('../data/food');

getFood = async (req, res) => {
    try {
        const food = await Food.find({ name: {$gt: 0} });
        console.log(food)
        res.send(food);

    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

module.exports = getFood;