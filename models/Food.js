const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  recipeLink: [{
    type: String,
    required: true,
  }],
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: 'Reviews',
    required: true,
  }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;