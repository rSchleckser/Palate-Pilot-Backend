const express = require('express');
const getFood = require('../controllers/foodController');
const router = express.Router();

//-----------GET ROUTES-------------//
router.get('/', getFood);

// //-----------POST ROUTES-------------//
// router.post('/', createFood);

// //-----------PUT ROUTES-------------//
// router.put('/:id', updateFood);

// //-----------DELETE ROUTES-------------//
// router.delete('/:id', deleteFood);

module.exports = router;
