const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
      username: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      favorite_foods: [{
        food: String,
        id: Number,
        description: String,
        country_id: String,
      }],
      reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    },
    { timestamps: true }
  );




// create the model and export it
const User = mongoose.model('User', userSchema);

module.exports = User;