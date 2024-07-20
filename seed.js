const mongoose = require('mongoose');
require('dotenv').config();

const { User } = require('./models/user');
const { Food } = require('./models/Food');
const Country = require('./models/Country');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');

        // Seed User (uncomment if needed)
        // await User.create({
        //     name: 'Kevin Jones',
        //     email: 'kevinjones@email.com',
        //     password: 'poiuytrewq',
        // })
        // .then((user) => {
        //     console.log('---- NEW USER ----\n', user);
        // })
        // .catch((error) => {
        //     console.log('---- ERROR CREATING USER ----\n', error);
        // });

        // Seed Food
        const foods = await Food.create([
            {
                name: 'Butter Chicken',
                recipeLink: 'https://www.example.com/butter-chicken',
                description: 'A rich and creamy dish with a blend of spices.',
                image: '/images/butter-chicken.jpg',
                country: 'India',
                reviews: 'Delicious and flavorful!'
            },
            {
                name: 'Peking Duck',
                recipeLink: 'https://www.example.com/peking-duck',
                description: 'A famous duck dish known for its crispy skin.',
                image: '/images/peking-duck.jpg',
                country: 'China',
                reviews: 'Crispy and flavorful!'
            },
            {
                name: 'Sushi',
                recipeLink: 'https://www.example.com/sushi',
                description: 'A traditional Japanese dish with vinegared rice.',
                image: '/images/sushi.jpg',
                country: 'Japan',
                reviews: 'Fresh and exquisite!'
            }
        ]);
        
        console.log('---- NEW FOODS ----\n', foods);

        // Seed Country
        await Country.create([
            {
                name: 'India',
                continent: 'Asia',
                foods: [foods[0]._id]
            },
            {
                name: 'China',
                continent: 'Asia',
                foods: [foods[1]._id]
            },
            {
                name: 'Japan',
                continent: 'Asia',
                foods: [foods[2]._id]
            }
        ])
        .then((countries) => {
            console.log('---- NEW COUNTRIES ----\n', countries);
        })
        .catch((error) => {
            console.log('---- ERROR CREATING COUNTRIES ----\n', error);
        });

        process.exit();
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    });
