import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

// Define action types
const SET_PRODUCTS = 'SET_PRODUCTS';

// Initial state
const initialState = {
  products: [],
};

// Reducer function
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;