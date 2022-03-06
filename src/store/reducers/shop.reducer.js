import {
  SELECT_PRODUCT,
  SELECT_CATEGORY,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_FULLFILLED,
} from 'store/actions/shop.action';

export const DEFAULT_CATEGORY = {
  id: 1,
  label: 'Hombres',
};

const initialState = {
  isLoading: false,
  products: [],
  selectedProduct: undefined,
  selectedCategory: undefined,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.find(
          product => product.id === action.productId,
        ),
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS_FULLFILLED:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

// const shopReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SELECT_PRODUCT:
//       return {
//         ...state,
//         selectedProduct: state.products.find(
//           product => product.id === action.productId,
//         ),
//       };
//     case SELECT_CATEGORY:
//       console.log('action', action.payload);
//       return {
//         ...state,
//         filteredProducts: state.products.filter(
//           product => product.category === action.payload.category.Id,
//         ),
//         selectedCategory: action.payload.category,
//       };
//     default:
//       return state;
//   }
// };
