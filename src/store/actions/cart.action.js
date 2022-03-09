export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const CLEANUP_CART = 'CLEANUP_CART';

export const updateCartItem = (item, quantity) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: {
    ...item,
    quantity,
  },
});

export const cleanupCart = () => ({
  type: CLEANUP_CART,
});
