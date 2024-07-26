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

// Routes
app.use('/', require('./routes/home'));
<<<<<<< HEAD
app.use('/auth', require('./routes/auth'));
app.use('/food', require('./routes/food'));

=======
// app.use('/auth', require('./routes/auth'));
>>>>>>> e9d590499763d5b5ba6aa6d7f6eeeabf939cd58d
// app.use('/profile', require('./routes/profile'));
// app.use('/favorites', require('./routes/favorites'));
app.use('/review', require('./routes/reviews'));
app.use('/country', require('./routes/country')); 
// app.use('/Card', require ('./routes/Card'));
app.use('/food', require ('./routes/food'));

// Serve static files from the React app
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, '../Palate-Pilot-Frontend/dist')));
=======
app.use(express.static(path.join(__dirname, '../Palate-Pilot-Frontend/frontend/dist'))); 
>>>>>>> e9d590499763d5b5ba6aa6d7f6eeeabf939cd58d

app.get('*', (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.resolve(__dirname, '../Palate-Pilot-Frontend/dist/index.html'));
=======
  res.sendFile(path.resolve(__dirname, '../Palate-Pilot-Frontend/frontend/dist/index.html')); 
>>>>>>> e9d590499763d5b5ba6aa6d7f6eeeabf939cd58d
});

// ===== SERVER LISTENER ===== 
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
