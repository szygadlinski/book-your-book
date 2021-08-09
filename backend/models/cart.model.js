const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true, min: 1, max: 50 },
  comment: { type: String, minlength: 0, maxlength: 500 },
});

module.exports = mongoose.model('Cart', cartSchema);
