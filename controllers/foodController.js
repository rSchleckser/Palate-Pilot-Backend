// import express from 'express';

// import db from '../config/db';

// const router = express.Router();

// router.get('/foods', async (req, res) => {
//     let collection = db.collection('foods');
//     let results = await collection.find({}).toArray();
//     res.send(results).status(200);
// });

// router.get('/foods/:id', async (req, res) => {
//     let collection = db.collection('foods');
//     let query = { _id: (req.params.id) };
//     let result = await collection.findOne(query);

//     if (!result) res.send('Not found').status(404);
//     else res.send(result).status(200);
// });

// router.post('/foods', async (req, res) => {
//     try {
//         let newFood = {
//             name: req.body.name,
//             recipeLink: req.body.recipeLink,
//             description: req.body.description,
//             image: req.body.image,
//             country: req.body.country,
//             reviews: req.body.reviews
//         };
//         let collection = db.collection('foods');
//         let result = await collection.insertOne(newFood);
//         res.send(result).status(204)
//     } catch (error) {
//         console.log('error: ', error);
//         res.status(500).send('Error adding food');
//     }
// });

// router.patch('/foods/:id', async (req, res) => {
//     try {
//         const query = { _id: req.params.id };
//         const updates = {
//             $set: {
//                 name: req.body.name,
//                 recipeLink: req.body.recipeLink,
//                 description: req.body.description,
//                 image: req.body.image,
//                 country: req.body.country,
//                 reviews: req.body.reviews
//             },
//         };
//     } catch (error) {
//         console.log('error: ', error);
//         res.status(500).send('Error updating food');
//     }
// });

// router.delete('/foods/:id', async (req, res) => {
//     try {
//         const query = { _id: req.params.id };
//         const collection = db.collection('foods');
//         let result = await collection.deleteOne(query);
//         res.send(result).status(200);
//     } catch (error) {
//         console.log('error: ', error);
//         res.status(500).send('Error deleting food');
//     }
// });

// export default router;