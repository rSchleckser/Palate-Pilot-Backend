const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  foods: [{
    type: Schema.Types.ObjectId, 
    ref: 'Food'
  }]
});

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;
