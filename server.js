// ===== GLOBAL VARIABLES ===== 
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');


const session = require('express-session');
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const axios = require('axios');
const cors = require('cors');
const { connect } = require('http2');

// ====== MIDDLEWARE ======
app.set('view engine', 'ejs');
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cors())

//Connect Server to Database 
connectDB();

//Routes
app.use('/', require('./routes/home'))

app.use('/profile', require('./routes/profile'))

app.use('/favorites', require('./routes/favorites'));

app.use('/review', require('./routes/reviews'))


// ===== SERVER LISTENER ===== 
const server = app.listen(PORT, () => {
    console.log('listening at PORT ', PORT);
});

module.exports = server;