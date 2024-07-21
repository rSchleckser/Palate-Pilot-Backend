const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/user');
const Food = require('./models/Food');
const Country = require('./models/Country');
const Review = require('./models/Review');

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

const seedDB = async () => {
  try {
    // Seed Countries
    const countries = await Country.create([
      { name: 'India', continent: 'Asia' },
      { name: 'China', continent: 'Asia' },
      { name: 'Japan', continent: 'Asia' },
      { name: 'UnitedStates', continent: 'North America'}, 
      { name: 'Mexico', continent: 'North America'},
    ]);

    console.log('---- NEW COUNTRIES ----\n', countries);

    const findCountryById = (countryName) => {
      const country = countries.find(country => country.name === countryName);
      return country ? country._id : null;
    };

    // Seed Foods
    const foods = await Food.create([
      {
        name: 'Butter Chicken',
        recipeLink: 'https://www.example.com/butter-chicken',
        description: 'A rich and creamy dish with a blend of spices.',
        image: '/images/butter-chicken.jpg',
        country: findCountryById('India')
      },
      {
        name: 'Peking Duck',
        recipeLink: 'https://www.example.com/peking-duck',
        description: 'A famous duck dish known for its crispy skin.',
        image: '/images/peking-duck.jpg',
        country: findCountryById('China')
      },
      {
        name: 'Sushi',
        recipeLink: 'https://www.example.com/sushi',
        description: 'A traditional Japanese dish with vinegared rice.',
        image: '/images/sushi.jpg',
        country: findCountryById('Japan')
      }
      
    ]);

    console.log('---- NEW FOODS ----\n', foods);

    // Seed Reviews
    const reviews = await Review.create([
      {
        user_id: new mongoose.Types.ObjectId(), 
        food_id: foods[0]._id,
        rating: 5,
        comment: 'Delicious and flavorful!'
      },
      {
        user_id: new mongoose.Types.ObjectId(), 
        food_id: foods[1]._id,
        rating: 4,
        comment: 'Crispy and flavorful!'
      },
      {
        user_id: new mongoose.Types.ObjectId(), 
        food_id: foods[2]._id,
        rating: 5,
        comment: 'Fresh and exquisite!'
      }
    ]);

    console.log('---- NEW REVIEWS ----\n', reviews);

    
    const findReviewByFoodId = (foodId) => {
      return reviews.filter(review => review.food_id.equals(foodId)).map(review => review._id);
    };

    for (let food of foods) {
      food.reviews = findReviewByFoodId(food._id);
      await food.save();
    }

    console.log('---- UPDATED FOODS WITH REVIEWS ----\n', foods);

   
    for (let food of foods) {
      const country = countries.find(country => country._id.equals(food.country));
      if (country) {
        country.foods.push(food._id);
        await country.save();
      }
    }

    console.log('---- UPDATED COUNTRIES WITH FOODS ----\n', countries);

    process.exit();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

connectDB().then(seedDB);


















    //     // Seed User (uncomment if needed)
    //     // await User.create({
    //     //     name: 'Kevin Jones',
    //     //     email: 'kevinjones@email.com',
    //     //     password: 'poiuytrewq',
    //     // })
    //     // .then((user) => {
    //     //     console.log('---- NEW USER ----\n', user);
    //     // })
    //     // .catch((error) => {
    //     //     console.log('---- ERROR CREATING USER ----\n', error);
    //     // });

    //     // Seed Food
    //     const foods = await Food.create([
    //         {
    //             name: 'Butter Chicken',
    //             recipeLink: 'https://www.example.com/butter-chicken',
    //             description: 'A rich and creamy dish with a blend of spices.',
    //             image: '/images/butter-chicken.jpg',
    //             country: 'India',
    //             reviews: 'Delicious and flavorful!'
    //         },
    //         {
    //             name: 'Peking Duck',
    //             recipeLink: 'https://www.example.com/peking-duck',
    //             description: 'A famous duck dish known for its crispy skin.',
    //             image: '/images/peking-duck.jpg',
    //             country: 'China',
    //             reviews: 'Crispy and flavorful!'
    //         },
    //         {
    //             name: 'Sushi',
    //             recipeLink: 'https://www.example.com/sushi',
    //             description: 'A traditional Japanese dish with vinegared rice.',
    //             image: '/images/sushi.jpg',
    //             country: 'Japan',
    //             reviews: 'Fresh and exquisite!'
    //         }
    //     ]);
        
    //     console.log('---- NEW FOODS ----\n', foods);

    //     // Seed Country
    //     const countries = await Country.create([
    //         {
    //             name: 'India',
    //             continent: 'Asia',
    //             foods: {}
    //         },
    //         {
    //             name: 'China',
    //             continent: 'Asia',
    //             foods: {}
    //         },
    //         {
    //             name: 'Japan',
    //             continent: 'Asia',
    //             foods: {}
    //         }
    //     ])
    //     .then((countries) => {
    //         console.log('---- NEW COUNTRIES ----\n', countries);
    //     })
    //     .catch((error) => {
    //         console.log('---- ERROR CREATING COUNTRIES ----\n', error);
    //     });

    //     process.exit();
    // })