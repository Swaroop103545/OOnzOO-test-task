// import axios from 'axios';

// const SET_PRODUCTS = 'SET_PRODUCTS';

// export const setProducts = (products) => ({
//   type: SET_PRODUCTS,
//   payload: products,
// });

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('https://fakestoreapi.com/products');
//       dispatch(setProducts(response.data));
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };
// };


import axios from 'axios';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_FILTERS = 'SET_FILTERS';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};
