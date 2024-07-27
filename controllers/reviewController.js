const User = require('../models/user');

exports.getAllReviews = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.reviews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get reviews', error });
  }
};

exports.addNewReview = async (req, res) => {
  try {
    const { dishName, review } = req.body;
    const user = await User.findById(req.user.id);
    user.reviews.push({ dishName, review });
    await user.save();
    res.status(201).json(user.reviews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add review', error });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { dishName, review } = req.body;
    const user = await User.findById(req.user.id);
    const reviewIndex = user.reviews.findIndex(r => r._id.toString() === id);
    if (reviewIndex > -1) {
      user.reviews[reviewIndex] = { ...user.reviews[reviewIndex], dishName, review };
      await user.save();
      res.json(user.reviews[reviewIndex]);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update review', error });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user.id);
    user.reviews = user.reviews.filter(r => r._id.toString() !== id);
    await user.save();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete review', error });
  }
};
