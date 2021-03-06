import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import shopReducer from 'store/reducers/shop.reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
