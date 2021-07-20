const mongoose = require('mongoose');

const cartProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model('CartProduct', cartProductSchema);
