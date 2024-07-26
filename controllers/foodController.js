const Food = require('../models/Food')

getFood = async (req, res) => {
    try {
        // const food = await Food.findById(req.food.name);
        // res.json(food);
        
        const foods = await Food.find(); 
        res.json({foods})
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};
