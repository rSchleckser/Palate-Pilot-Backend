const Food = require('../models/Food');

exports.getFood = async (req, res) => {
    try {
        const food = await Food.findById(req.food.name);
        res.json(food);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

