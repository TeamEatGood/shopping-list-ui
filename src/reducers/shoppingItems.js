import { ADD_SHOPPING_ITEM, TOGGLE_SHOPPING_ITEM } from '../constants';

const shoppingItem = (state = {}, action) => {
  switch (action.type) {
    case ADD_SHOPPING_ITEM:
      return {
        id: action.id,
        name: action.name,
        lastPurchased: action.last_purchased,
        normalInterval: action.norm_interval,
        bought: false
      };
    case TOGGLE_SHOPPING_ITEM:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        bought: !state.bought
      });
    default:
      return state;
  }
};

const shoppingItems = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOPPING_ITEM:
      return [
        ...state,
        shoppingItem(undefined, action)
      ];
    case TOGGLE_SHOPPING_ITEM:
      return state.map(t =>
        shoppingItem(t, action)
      );
    default:
      return state;
  }
};

export default shoppingItems;