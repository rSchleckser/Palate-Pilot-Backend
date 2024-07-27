const express = require('express');
const router = express.Router();
const Favorites = require('../controllers/favorites')
const isLoggedIn = require('../middleware/isLoggedIn');

// Get all favorites for a user
router.get('/favorites', isLoggedIn, Favorites.getAllFavorites);

// Add a new favorite
router.post('/favorites', isLoggedIn, Favorites.addNewFavorite);

// Update a favorite
router.put('/favorites/:id', isLoggedIn, Favorites.updateFavorite);

// Delete a favorite
router.delete('/favorites/:id', isLoggedIn, Favorites.deleteFavorite);

module.exports = router;
