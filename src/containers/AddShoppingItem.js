import React from 'react';
import { connect } from 'react-redux';
import { addShoppingItem } from '../actions/shoppingItems';

let AddShoppingItem = ({ dispatch }) => {
    let nameInput;
    let amountInput;

    return (
        <div className="addShoppingItem">
            <form onSubmit={e => {
                e.preventDefault();
                if(!nameInput.value.trim() || !amountInput.value.trim()){
                    return;
                }
                dispatch(addShoppingItem(nameInput.value, parseInt(amountInput.value)));
                nameInput.value = '';
                amountInput.value = '';
            }}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" ref={node => {
                    nameInput = node;
                }} />
                
                 <label htmlFor="amount">Amount:</label>
                 <input id="amount" type="number" min="1" ref={node => {
                    amountInput = node;
                }} />
               
                <button type="submit" className="addButton">Add Item</button>
            </form>
        </div>
    );
};

AddShoppingItem = connect()(AddShoppingItem);

export default AddShoppingItem;