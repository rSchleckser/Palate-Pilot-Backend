// const Food = require('../models/Food');
const foods  = require('../data/food');

exports.getFood = async (req, res) => {
    try {
        // const food = await Food.findById(req.food.name);
        // res.json(food);
        
        console.log(foods)
        res.json({foods})
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

