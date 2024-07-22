const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

router.get('/Card', (req, res) => {
  const Card = req.user.Card;

  try {
      res.status(200).send(Card);
  } catch (error) {
      res.status(404).render('404');
  }
});

module.exports = 
  router