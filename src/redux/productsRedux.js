import Axios from 'axios';
import { API_URL } from '../config';

// selectors
export const getAllProducts = ({ products }) => products.data;
export const getSingleProduct = ({ products }, id) => products.data.filter(product => product._id === id)[0];

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

// thunk creators
export const fetchAllProducts = () => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/products`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      dispatch(fetchStarted());

      let res = await Axios.get(`${API_URL}/products/${id}`);
      dispatch(fetchSuccess([res.data]));
    }
    catch(err) {
      dispatch(fetchError(err.message || true));
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
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
