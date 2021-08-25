let dbURI = process.env.NODE_ENV === 'production'
  ?
  'mongodb+srv://szymon-zygadlinski:Pfk6FxLGGr5AaTR@book-your-book.b1ou8.mongodb.net/book-your-book?retryWrites=true&w=majority'
  :
  'mongodb://localhost:27017/book-your-book';

module.exports = dbURI;
