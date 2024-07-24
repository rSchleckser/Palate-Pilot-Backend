cd
const express = require('express');
const router = express.Router();
const { getReview } = require('../controllers/reviewController');


let reviews = [];


router.get('/', getReview);


router.get('/:id', (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) return res.status(404).send('Review not found');
    res.json(review);
});


router.post('/', (req, res) => {
    const { id, dishName, reviewText } = req.body;
    const newReview = { id, dishName, reviewText };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

router.put('/:id', (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) return res.status(404).send('Review not found');

    const { dishName, reviewText } = req.body;
    review.dishName = dishName || review.dishName;
    review.reviewText = reviewText || review.reviewText;
    
    res.json(review);
});


router.delete('/:id', (req, res) => {
    const index = reviews.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Review not found');
    
    const deletedReview = reviews.splice(index, 1);
    res.json(deletedReview);
});

module.exports = router;
