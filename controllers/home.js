const { User } = require('../models/user');
const axios = require('axios');

// @desc GET - Home Page
const getHomePage = async (req, res) => {
    try {
        res.status(200).send('home/index');
    } catch (error) {
        res.status(404).render('404');
    }
}

module.exports = { getHomePage };
