const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: true,
    },
    foods: [{
        type: Schema.Types.ObjectId,
        ref: 'Food'
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }],
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;