import { READ_PRODUCT_LIST } from '../actions/ProductsList';

function productsList(state = [], action) {
    if (action.type === READ_PRODUCT_LIST) return action.list;

    return state;
}

export default (state = [], action) => (
    productsList(state, action)
);
