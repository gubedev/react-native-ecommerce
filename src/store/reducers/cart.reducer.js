import {
  ADD_ITEM,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from 'store/actions/cart.action';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let updatedItems = isInCart(item.id)
        ? items.map(cartItem =>
            cartItem.item.id === item.id
              ? { ...cartItem, quantity: 1 }
              : cartItem,
          )
        : [...items, { item }];

      return {
        ...state,
        items: updatedItems,
      };
    case INCREMENT_QUANTITY:
      let incrementedtems = isInCart(item.id)
        ? items.map(cartItem =>
            cartItem.item.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          )
        : [...items, { item, quantity }];
      return {
        ...state,
        items: incrementedtems,
      };
    case DECREMENT_QUANTITY:
      let decrementedtems = isInCart(item.id)
        ? items.map(cartItem =>
            cartItem.item.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          )
        : [...items, { item, quantity }];
      return {
        ...state,
        items: decrementedtems,
      };
    default:
      return state;
  }
};

const isInCart = id => {
  const filtered = items.find(i => i.item.id === id);
  return filtered !== undefined;
};

export default cartReducer;
