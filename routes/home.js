const express = require('express');
const { getHomePage } = require('../controllers/home');
const router = express.Router();

//-----------GET ROUTES-------------//
router.get('/', getHomePage);

module.exports = router;
