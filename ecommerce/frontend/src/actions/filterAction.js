import axios from 'axios'
import {
    FILTER_PRODUCTS_BY_CATEGORY,
   
} from '../constants/filterConstants'


export const filterProducts = (category) => async (dispatch) => {
  console.log("inside component");
  console.log(category);

  try {
    const { data } = await axios.get(`/api/products?category=${category}`);

    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: {
        category: category,
        items: data,
      },
    });
  } catch (error) {
    console.error('Error fetching filtered products:', error);
  }
};
