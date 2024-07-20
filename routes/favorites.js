const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user');
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/favorites', isLoggedIn, (req, res) => {
    const favorites = req.user.favorites;

    try {
        res.status(200).send(favorites);
    } catch (error) {
        res.status(404).render('404');
    }
});

module.exports = 
    router