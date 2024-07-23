const Review = require('../models/Review');

exports.getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.review.food);
        res.json(review);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
}