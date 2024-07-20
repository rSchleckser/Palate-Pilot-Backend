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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
app.get('/',(req,res)=>{
    res.send("Hello Collin!!")
})

app.use('/profiles', require('./routes/profile'))
=======
app.use('/', require ('./routes/home'))
>>>>>>> 95b22fefd98f52ce5a885e96ede50e696d428f74

app.use('/profiles', require ('./routes/profile'));

// ===== SERVER LISTENER ===== 
const server = app.listen(PORT, () => {
    console.log('listening at PORT ', PORT);
});

module.exports = server;