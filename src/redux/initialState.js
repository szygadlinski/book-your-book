export const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    data: [
      {
        _id: '4',
        title: 'Neverwhere',
        cover: '/images/authors/gaiman/books/neverwhere/1.jpg',
        price: 11.99,
        amount: 1,
        comment: 'I want autograph! :D',
      },
      {
        _id: '9',
        title: 'The Amazing Maurice and His Educated Rodents',
        cover: '/images/authors/pratchett/books/the-amazing-maurice-and-his-educated-rodents/1.jpg',
        price: 5.99,
        amount: 3,
        comment: '',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  orders: {
    data: [],
  },
};
