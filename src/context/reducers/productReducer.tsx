// const initialState = {
//   products: [],
//   loading: false,
//   error: null,
//   filters: {
//     category: null,
//     priceRange: null,
//   },

// };

// const ProductReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case 'PRODUCT_DETAILS':
//       return {
//         ...state,
//       };
//     case 'REQUEST_DATA':
//       return {...state, loading: true};
//     case 'RECEIVE_DATA':
//       return {...state, loading: false, data: action.payload};
//     case 'API_ERROR':
//       return {...state, loading: false, error: action.payload};
//     default:
//       return state;
//   }
// };

// export default ProductReducer;

import { SET_PRODUCTS, SET_FILTERS } from '../actions/ProductAction';

const initialState = {
  products: [],
  loading: false,
  error: null,
  filters: {
    category: null,
    priceRange: null,
  },
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, loading: true };
    case SET_PRODUCTS:
      return { ...state, loading: false, products: action.payload };
    case 'API_ERROR':
      return { ...state, loading: false, error: action.payload };
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
