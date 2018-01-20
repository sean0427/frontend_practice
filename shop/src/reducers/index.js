import { combineReducers } from 'redux';

import Shoplist from './Shoplist';
import ProductsList from './ProductsList';

export default combineReducers({
    productsList: ProductsList,
    shoplist: Shoplist,
});
