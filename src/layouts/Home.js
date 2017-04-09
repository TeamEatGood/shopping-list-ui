import React from 'react';
import AddShoppingItem from '../containers/AddShoppingItem';
import VisibleShoppingItemList from '../containers/VisibleShoppingItemList';


const Home = () => (
    <div>
        <AddShoppingItem />
        <VisibleShoppingItemList />
    </div>
);

export default Home;