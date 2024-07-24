const express = require('express');
const foodController = require('../controllers/foodController')
// const { getFood, createFood, updateFood, deleteFood } = require('../controllers/');
const router = express.Router();

//-----------GET ROUTES-------------//
router.get('/', foodController.getFood);

// //-----------POST ROUTES-------------//
// router.post('/', createFood);

// //-----------PUT ROUTES-------------//
// router.put('/:id', updateFood);

// //-----------DELETE ROUTES-------------//
// router.delete('/:id', deleteFood);

module.exports = router;
