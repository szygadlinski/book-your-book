const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');

router.get('/products', async (req, res) => {
  try {
    const products = await Product
      .find()
      .select('title author cover price')
      .sort({ title: 1 });
    if(!products) {
      res.status(404).json({ message: 'Not found...' });
    } else {
      res.json(products);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(!product) {
      res.status(404).json({ message: 'Not found...' });
    } else {
      res.json(product);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
