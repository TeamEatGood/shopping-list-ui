import { connect } from 'react-redux';
import { toggleShoppingItem } from '../actions/shoppingItems';
import ShoppingItemList from '../components/ShoppingItemList';

const mapStateToProps = (state) => {
    return {
        shoppingItems: state.shoppingItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShoppingItemClick: (id) => {
            dispatch(toggleShoppingItem(id));
        }
    };
};

const VisibleShoppingItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingItemList);

export default VisibleShoppingItemList;