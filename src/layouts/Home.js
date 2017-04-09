import React from 'react';
import AddShoppingItem from '../containers/AddShoppingItem';
import VisibleShoppingItemList from '../containers/VisibleShoppingItemList';
import Bag from '../components/Bag';

const Home = () => (
    <div>
        <Bag>
            <AddShoppingItem />
            <VisibleShoppingItemList />
        </Bag>
    </div>
);

export default Home;