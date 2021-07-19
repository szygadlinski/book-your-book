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

module.exports = router;
