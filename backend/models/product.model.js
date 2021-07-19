const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  cover: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  photos: { type: Array, required: true },
});

module.exports = mongoose.model('Product', productSchema);
