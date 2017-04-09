import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ShoppingItem = ({ onClick, bought, name, amount, lastPurchased, normalInterval }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: bought ? 'line-through' : 'none'
        }}
    >
        <div>{name} x {amount}</div>
        {lastPurchased && <div>Last Purchased: {moment(lastPurchased.substring(0, 10)).format("l")}</div>}
        {normalInterval && <div>Usually bought {normalInterval} days ago</div>}
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