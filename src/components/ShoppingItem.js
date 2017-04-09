import React from 'react';
import PropTypes from 'prop-types';

const ShoppingItem = ({ onClick, bought, name }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: bought ? 'line-through' : 'none'
        }}
    >
        {name}
    </li>
);

ShoppingItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    bought: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default ShoppingItem;