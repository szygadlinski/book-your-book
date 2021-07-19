const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  code: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  products: { type: Array, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
