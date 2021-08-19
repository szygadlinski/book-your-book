import Axios from 'axios';
import { API_URL } from '../config';

// selectors
export const getOrders = ({ orders }) => orders;

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const ADD_TO_ORDERS = createActionName('ADD_TO_ORDERS');

// action creators
export const addToOrders = payload => ({ payload, type: ADD_TO_ORDERS });

// thunk creators
export const addToOrdersDB = newOrder => {
  return async dispatch => {

    try {
      let res = await Axios.post(`${API_URL}/orders`, newOrder);
      dispatch(addToOrders(res));
    }
    catch(err) {
      dispatch('Error:', err.message);
    }
  };
};

// reducer
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_ORDERS: {
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
    }
    default:
      return statePart;
  }
};
