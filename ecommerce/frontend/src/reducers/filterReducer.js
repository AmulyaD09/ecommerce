import { FILTER_PRODUCTS_BY_CATEGORY } from '../constants/filterConstants';

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
    default:
      return state;
  }
};

export default filterReducer;
