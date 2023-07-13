import {ADD_TO_CART} from './constants';
import {REMOVE_FROM_CART} from './constants';

export const addItemToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeItemFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index,
});
