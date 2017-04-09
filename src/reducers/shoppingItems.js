import { ADD_SHOPPING_ITEM, TOGGLE_SHOPPING_ITEM } from '../constants';

const shoppingItem = (state = {}, action) => {
  switch (action.type) {
    case ADD_SHOPPING_ITEM:
      return {
        id: action.id,
        name: action.name,
        amount: action.amount,
        lastPurchased: action.lastPurchased,
        normalInterval: action.normalInterval,
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

const shoppingItems = (state = [ {
                                        "id": 312,
                                        "name": "COOKIES: HOLIDAY/SPECIAL OCCAS",
                                        "amount": 1,
                                        "lastPurchased": "2017-04-00T20:31:17.635554",
                                        "normalInterval": 5,
                                        "bought": false,
                                    },
                                    {
                                        "id": 315,
                                        "name": "BREAKFAST SWEETS,SW GDS:MUFFINS-LSS THN 6",
                                        "amount": 1,
                                        "lastPurchased": "2017-03-08T20:31:17.635554",
                                        "normalInterval": 3,
                                        "bought": false
                                    } ], action) => {
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