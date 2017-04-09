import { ADD_SHOPPING_ITEM, TOGGLE_SHOPPING_ITEM } from '../constants';

let nextShoppingItemId = 0;
export const addShoppingItem = (name, amount, last_purchased, norm_interval) => {
  return {
    type: ADD_SHOPPING_ITEM,
    id: nextShoppingItemId++,
    name,
    amount,
    last_purchased,
    norm_interval
  };
};

export const toggleShoppingItem = (id) => {
  return {
    type: TOGGLE_SHOPPING_ITEM,
    id
  };
};