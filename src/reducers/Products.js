import { READ_PRODUCT_LIST, READ_PRODUCT_TYPE } from '../actions/ProductsList';

const getProducts = (actionName) => (state = [], action) => {
    if (action.type === actionName) 
        return (action.list !== undefined) ? action.list : state;

    return state;
};

export default (state = {}, action) => ({
    list: getProducts(READ_PRODUCT_LIST)(state.list, action),
    type: getProducts(READ_PRODUCT_TYPE)(state.type, action),
});
