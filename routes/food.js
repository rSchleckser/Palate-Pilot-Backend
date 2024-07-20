const express = require('express');
const { getFoodPage, createFood, updateFood, deleteFood } = require('../controllers/food');
const router = express.Router();

//-----------GET ROUTES-------------//
router.get('/', getFoodPage);

//-----------POST ROUTES-------------//
router.post('/', createFood);

//-----------PUT ROUTES-------------//
router.put('/:id', updateFood);

//-----------DELETE ROUTES-------------//
router.delete('/:id', deleteFood);

module.exports = router;
