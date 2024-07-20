const mongoose = require('mongoose');
require('dotenv').config();

 const { User} = require('./models/user');
 const { Food } = require('./models/food');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected');

        User.create({
            name: 'Kevin Jones',
            email: 'kevinjones@email.com',
            password: 'poiuytrewq',
        })
            .then((user) => {
                console.log('---- NEW USER ----\n', user);
            })
            .catch((error) => {
                console.log('---- ERROR CREATING USER ----\n', error);
            });

        // Create Food
        Food.create({
            name: 'Alfredo',
            recipeLink: 'https://www.example.com/foodname',
            description: 'Alfredo sauce is a rich, creamy sauce traditionally made with butter, heavy cream, and Parmesan cheese. It originates from Italy, where it was first created by Alfredo di Lelio in the early 20th century.',
            image: 'poiuytrewq',
            country: 'Italy',
            reviews: "This Alfredo sauce is a luxurious blend of creamy, buttery goodness and savory Parmesan, making it a decadent delight for any pasta lover."
        })
            .then((food) => {
                console.log('---- NEW FOOD ----\n', food);
            })
            .catch((error) => {
                console.log('---- ERROR CREATING FOOD ----\n', error);
            });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });