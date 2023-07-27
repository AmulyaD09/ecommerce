import { FILTER_PRODUCTS_BY_CATEGORY, SORT_PRODUCTS_BY_PRICE_LOW_TO_HIGH,SORT_PRODUCTS_BY_PRICE_HIGH_TO_LOW, } from '../constants/filterConstants';

const initialState = {
  category: '', 
  items: [], 
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
        items: action.payload.items,
      };
      case SORT_PRODUCTS_BY_PRICE_LOW_TO_HIGH:
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.price - b.price),
      };
    case SORT_PRODUCTS_BY_PRICE_HIGH_TO_LOW:
      return {
        ...state,
        items: [...state.items].sort((a, b) => b.price - a.price),
      };
    default:
      return state;
  }
};

export default filterReducer;
