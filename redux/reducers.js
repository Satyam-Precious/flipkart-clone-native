import {ADD_TO_CART} from './constants';
import {REMOVE_FROM_CART} from './constants';

const initialState = [];
export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray;

    default:
      return state;
  }
};