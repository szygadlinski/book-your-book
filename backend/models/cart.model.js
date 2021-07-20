const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  comment: { type: String },
});

module.exports = mongoose.model('Cart', cartSchema);
