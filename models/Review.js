const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const reviewSchema = new mongoose.Schema(
    {
      review_id: Number,
      user_id: Number,
      food_id: Number,
      rating: Number,
      comment: { type: String, required: true},
    }
);

// create the model and export it
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;