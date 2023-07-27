import axios from 'axios'
import {
    FILTER_PRODUCTS_BY_CATEGORY,
    SORT_PRODUCTS_BY_PRICE_LOW_TO_HIGH,
    SORT_PRODUCTS_BY_PRICE_HIGH_TO_LOW,
} from '../constants/filterConstants'

export const filterProducts = (category) => async (dispatch) => {

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

export const sortProductsByPriceLowToHigh = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products`);
    const sortedProducts = data.products.sort((a, b) => a.price - b.price);

    dispatch({
      type: SORT_PRODUCTS_BY_PRICE_LOW_TO_HIGH,
      payload: sortedProducts,
    });
  } catch (error) {
    console.error('Error sorting products:', error);
  }
};

export const sortProductsByPriceHighToLow = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products`);
    const sortedProducts = data.products.sort((a, b) => b.price - a.price);

    dispatch({
      type: SORT_PRODUCTS_BY_PRICE_HIGH_TO_LOW,
      payload: sortedProducts,
    });
  } catch (error) {
    console.error('Error sorting products:', error);
  }
};