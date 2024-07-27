const express = require('express');
const router = express.Router();
const Card = require('../models/Card')

router.get('/cards', (req, res) => {
  let cards = req.body.card;
  
  res.json(cards);

});

module.exports = 
  router