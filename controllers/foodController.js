const Food = require('../models/Food')

exports.getFood = async (req, res) => {
    try {

        const foods = await Food.find(); 
        res.json({foods})
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};
