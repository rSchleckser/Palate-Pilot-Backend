const Food = require('../models/Food')
const Country = require('../models/Country');

exports.getFood = async (req, res) => {
    try {

        const foods = await Food.find(); 
        const coutnries = await Country.find();
        res.json({foods})
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};
