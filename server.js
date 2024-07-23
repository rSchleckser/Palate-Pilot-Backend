// ===== GLOBAL VARIABLES ===== 
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const cors = require('cors');

// ====== MIDDLEWARE ======
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cors());

// Connect Server to Database 
connectDB();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../Palate-Pilot-Frontend/frontend/dist'))); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Palate-Pilot-Frontend/frontend/dist/index.html')); 
});

// Routes
app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));
app.use('/favorites', require('./routes/favorites'));
app.use('/review', require('./routes/reviews'));
app.use('/country', require('./routes/country')); 
app.use('/Card', require ('./routes/Card'));
app.use('/food', require ('./routes/food'));

// ===== SERVER LISTENER ===== 
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;



