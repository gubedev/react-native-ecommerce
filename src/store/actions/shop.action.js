import { requestProducts } from 'store/api';

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_FULLFILLED = 'FETCH_PRODUCTS_FULLFILLED';
export const FETCH_PRODUCTS_REJECTED = 'FETCH_PRODUCTS_REJECTED';

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const fetchProducts = category => {
  return async dispatch => {
    dispatch({ type: FETCH_PRODUCTS_PENDING });
    try {
      const products = await requestProducts(category);
      dispatch({
        type: FETCH_PRODUCTS_FULLFILLED,
        payload: products,
      });
    } catch {
      dispatch({ type: FETCH_PRODUCTS_REJECTED });
    }
  };
};
