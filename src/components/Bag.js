import React from 'react';

const Bag = ({children}) => (
    <div className="bag">
        <img src="../public/images/paperbag.svg"></img>
        <div className="shoppingBagContents">{children}</div>
    </div>
);

export default Bag;