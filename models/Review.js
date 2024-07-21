const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', // Assuming you have a User model
    required: true 
  },
  food_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Food', 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true 
  },
  comment: { 
    type: String, 
    required: true 
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
