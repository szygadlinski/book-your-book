import Axios from 'axios';

// selectors
export const getProductsFromCart = ({ cart }) => cart.data;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const ERROR = createActionName('ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const UPDATE_IN_CART = createActionName('UPDATE_IN_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const error = payload => ({ payload, type: ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const updateInCart = payload => ({ payload, type: UPDATE_IN_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

// thunk creators
export const fetchCartProducts = () => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios
      .get('http://localhost:8000/api/cart')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(error(err.message || true));
      });
  };
};

export const addToCartsDB = newCart => {
  return async dispatch => {
    try {
      let res = await Axios.post('http://localhost:8000/api/cart', newCart);
      dispatch(addToCart(res));
    }
    catch(err) {
      dispatch(error(err.message || true));
    }
  };
};

export const removeFromCartsDB = () => {
  return async dispatch => {
    try {
      let res = await Axios.delete('http://localhost:8000/api/cart');
      dispatch(removeFromCart(res));
    }
    catch(err) {
      dispatch(error(err.message || true));
    }
  };
};

// reducer
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        data: action.payload,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
    }
    case UPDATE_IN_CART: {
      return {
        ...statePart,
        data: statePart.data.map(product => (
          product._id !== action.payload.id
            ?
            product
            :
            {
              ...product,
              amount: action.payload.amount,
              comment: action.payload.comment,
            }
        )),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        data: statePart.data.filter(product => product._id !== action.payload),
      };
    }
    default:
      return statePart;
  }
};
