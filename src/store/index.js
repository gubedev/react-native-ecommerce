import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import shopReducer from 'store/reducers/shop.reducer';
import cartReducer from 'store/reducers/cart.reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
