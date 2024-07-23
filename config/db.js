// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// });

// try {
//     await client.connect();
//     await client.db('admin').command({ ping: 1 });
//     console.log('Pinged your deployment. You have sucessfully connected to MongoDB.');
// } catch (error) {
//     console.log('error: ', error);
// }

// let db = client.db('test');

// export default db;




const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () =>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log('MongoDB Connected')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB

