const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const dbURI = require('./config');
const productsRoutes = require('./routes/products.routes');
const cartsRoutes = require('./routes/carts.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

app.use(session({
  secret: 'whatever (yes, I know that it should be much more complicated :D)',
  store: MongoStore.create({ mongoUrl: dbURI }),
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', productsRoutes);
app.use('/api', cartsRoutes);
app.use('/api', ordersRoutes);

app.use('/api', (req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

app.use(express.static(path.join(__dirname, '../build')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => {
  console.log('Error:', err);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port', port);
});
