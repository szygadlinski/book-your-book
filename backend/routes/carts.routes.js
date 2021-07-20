const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');

router.get('/cart', async (req, res) => {
  try {
    const carts = await Cart.find();
    if(!carts) {
      res.status(404).json({ message: 'Not found...' });
    } else {
      //req.session.cart = carts;
      res.json(carts);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
