const express = require('express');
const router = express.Router();
const Reviews = require('../controllers/reviewController');
const isLoggedIn = require('../middleware/isLoggedIn');

// Get all reviews for a user
router.get('/', isLoggedIn, Reviews.getAllReviews);

// Add a new review
router.post('/', isLoggedIn, Reviews.addNewReview);

// Update a review
router.put('/:id', isLoggedIn, Reviews.updateReview);

// Delete a review
router.delete('/:id', isLoggedIn, Reviews.deleteReview);

module.exports = router;
