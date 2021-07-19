const express = require('express');
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
    const newOrder = new Order({
      name: name,
      email: email,
      phone: phone,
      street: street,
      code: code,
      city: city,
      country: country,
      products: products,
    });
    await newOrder.save();
    res.json(newOrder);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
