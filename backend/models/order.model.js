const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 50 },
  email: { type: String, required: true, minlength: 6, maxlength: 100 },
  phone: { type: String, required: true, minlength: 9, maxlength: 18 },
  street: { type: String, required: true, minlength: 3, maxlength: 50 },
  code: { type: String, required: true, minlength: 5, maxlength: 6 },
  city: { type: String, required: true, minlength: 3, maxlength: 50 },
  country: { type: String, required: true, minlength: 3, maxlength: 50 },
  products: { type: Array, required: true, minlength: 1, maxlength: 50 },
});

module.exports = mongoose.model('Order', orderSchema);
