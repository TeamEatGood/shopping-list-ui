import React from 'react';
import PropTypes from 'prop-types';
import ShoppingItem from './ShoppingItem';

const ShoppingItemList = ({ shoppingItems, onShoppingItemClick }) => (
    <ul>
        {shoppingItems.map(shoppingItem =>
            <ShoppingItem
                key={shoppingItem.id}
                {...shoppingItem}
                onClick={() => onShoppingItemClick(shoppingItem.id)}
            />
        )}
    </ul>
);

ShoppingItemList.propTypes = {
    shoppingItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        bought: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onShoppingItemClick: PropTypes.func.isRequired
};

export default ShoppingItemList;