const express = require('express');
const router = express.Router();
const Country = require('../models/Country');
const Food = require('../models/Food');


router.get('/:countryId/foods', async (req, res) => {
  try {
    const { countryId } = req.params;
    const country = await Country.findById(countryId).populate('foods');

    if (!country) {
      return res.status(404).render('404');
    }

    res.status(200).send(country.foods);
  } catch (error) {
    console.error(error);
    res.status(404).render('404');
  }
});

module.exports = router;
