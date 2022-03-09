export const ADD_ITEM = 'ADD_ITEM';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';

export const updateCartItem = (item, quantity) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: {
    ...item,
    quantity,
  },
});
