const express = require('express');
const router = express.Router();

const Cart = require('../models/cart.model');

router.get('/cart', async (req, res) => {
  try {
    const carts = await Cart.find();
    if(!carts) {
      res.status(404).json({ message: 'Not found...' });
    } else {
      req.session.cart = carts;
      res.json(carts);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { _id, title, cover, price, amount } = req.body;

    if (!amount) {
      throw new Error('Invalid amount');
    } else {
      const newCart = new Cart({
        _id: _id,
        title: title,
        cover: cover,
        price: price,
        amount: amount,
        comment: '',
      });
      await newCart.save();
      res.json(newCart);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/cart', async (req, res) => {
  try {
    await Cart.deleteMany({});
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
