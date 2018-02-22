import { combineReducers } from 'redux';

import Shoplist from './Shoplist';
import Products from './Products';
import Language from './Language';

export default combineReducers({
    products: Products,
    shoplist: Shoplist,
    language: Language,
});
