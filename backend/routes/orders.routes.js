const express = require('express');
const sanitize = require('mongo-sanitize');
const router = express.Router();

const Order = require('../models/order.model');

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    if(!orders) {
      res.status(404).json({ message: 'Not found...' });
    } else {
      res.json(orders);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  try {
    const { name, email, phone, street, code, city, country, products } = req.body;

    if(!name || !email || !phone || !street || !code || !city || ! country || !products) {
      throw new Error('Some of the data are invalid');
    } else {
      const newOrder = new Order({
        name: sanitize(name),
        email: sanitize(email),
        phone: sanitize(phone),
        street: sanitize(street),
        code: sanitize(code),
        city: sanitize(city),
        country: sanitize(country),
        products: sanitize(products),
      });
      await newOrder.save();
      res.json(newOrder);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
