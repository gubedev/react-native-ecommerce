import { UPDATE_ITEM_QUANTITY } from 'store/actions/cart.action';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM_QUANTITY:
      const { items } = state;
      let updatedItems = isInCart(items, action.payload.id)
        ? items.map(cartItem =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + action.payload.quantity,
                }
              : cartItem,
          )
        : [...items, { ...action.payload }];

        console.log(updatedItems);
      
        return {
        ...state,
        items: updatedItems,
      };

    default:
      return state;
  }
};

const isInCart = (items, id) => {
  const filtered = items.find(i => i.id === id);
  return filtered !== undefined;
};

export default cartReducer;
