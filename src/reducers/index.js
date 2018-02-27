import { combineReducers } from 'redux';

import Shoplist from './Shoplist';
import Products from './Products';
import Language from './Language';
import User from './User';
import Manager from './Manager';

export default combineReducers({
    products: Products,
    shoplist: Shoplist,
    language: Language,
    user: User,
    manager: Manager,
});
