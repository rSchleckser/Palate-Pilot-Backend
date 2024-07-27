const User = require('../models/user');

exports.getAllFavorites = async (req, res) => {
    try {
      const user = await User.findById(req.user.id); // Assuming you are using middleware to attach user to request
      res.json(user.favorite_foods);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get favorites', error });
    }
  }

  exports.addNewFavorite = async (req, res) => {
    try {
      const { food, description, country_id } = req.body;
      const user = await User.findById(req.user.id);
      user.favorite_foods.push({ food, description, country_id });
      await user.save();
      res.status(201).json(user.favorite_foods);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add favorite', error });
    }
  }

  exports.updateFavorite = async (req, res) => {
    try {
      const { id } = req.params;
      const { food, description, country_id } = req.body;
      const user = await User.findById(req.user.id);
      const favoriteIndex = user.favorite_foods.findIndex(f => f._id.toString() === id);
      if (favoriteIndex > -1) {
        user.favorite_foods[favoriteIndex] = { ...user.favorite_foods[favoriteIndex], food, description, country_id };
        await user.save();
        res.json(user.favorite_foods[favoriteIndex]);
      } else {
        res.status(404).json({ message: 'Favorite not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to update favorite', error });
    }
  }

  exports.deleteFavorite = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(req.user.id);
      user.favorite_foods = user.favorite_foods.filter(f => f._id.toString() !== id);
      await user.save();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete favorite', error });
    }
  }