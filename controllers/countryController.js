const Country = require('../models/Country');

exports.getCountry = async (req, res) => {
    try {
        const country = await Country.findById(req.country.name);
        res.json(country);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message })
    }
}