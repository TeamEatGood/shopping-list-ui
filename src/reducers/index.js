import { combineReducers } from 'redux';
import shoppingItems from './shoppingItems';

const groceryApp = combineReducers({
    shoppingItems
});

export default groceryApp;