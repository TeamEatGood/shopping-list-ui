import React from 'react';
import PropTypes from 'prop-types';

const ShoppingItem = ({ onClick, bought, name, amount, lastPurchased, normalInterval }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: bought ? 'line-through' : 'none'
        }}
    >
        <div>{name} x {amount}</div>
        <div>Last Purchased: {lastPurchased}</div>
        <div>Usually bought {normalInterval} days ago</div>
    </li>
);

ShoppingItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    bought: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
    lastPurchased: PropTypes.string,
    normalInterval: PropTypes.number
};

export default ShoppingItem;