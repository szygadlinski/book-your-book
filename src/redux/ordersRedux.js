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
