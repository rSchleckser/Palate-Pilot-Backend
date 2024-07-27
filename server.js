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
app.use('/auth', require('./routes/auth'));
app.use('/food', require('./routes/food'));
app.use('/profile', require('./routes/profile'));
app.use('/favorites', require('./routes/favorites'));
app.use('/reviews', require('./routes/reviews'));
// app.use('/country', require('./routes/country')); 
// app.use('/Card', require ('./routes/Card'));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../Palate-Pilot-Frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../Palate-Pilot-Frontend/dist/index.html'));
});

// ===== SERVER LISTENER ===== 
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
