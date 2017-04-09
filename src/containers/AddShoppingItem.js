import React from 'react';
import { connect } from 'react-redux';
import { addShoppingItem } from '../actions/shoppingItems';

let AddShoppingItem = ({ dispatch }) => {
    let itemInput;
    let amountInput;

    return (
        <div className="addShoppingItem">
            <form onSubmit={e => {
                e.preventDefault();
                if(!itemInput.value.trim() || !amountInput.value.trim()){
                    return;
                }
                dispatch(addShoppingItem(itemInput.value, parseInt(amountInput.value)));
                itemInput.value = '';
                amountInput.value = '';
            }}>
                <label htmlFor="item"><strong>Item:</strong></label>
                <input id="item" type="text" ref={node => {
                    itemInput = node;
                }} />
                
                 <label htmlFor="amount"><strong>Amount:</strong></label>
                 <input id="amount" type="number" min="1" ref={node => {
                    amountInput = node;
                }} />
               
                <button type="submit" className="addButton"><strong>Add Item</strong></button>
            </form>
        </div>
    );
};

AddShoppingItem = connect()(AddShoppingItem);

export default AddShoppingItem;