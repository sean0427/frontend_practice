import { APPEND_TO_SHOPLIST } from '../actions/Shoplist';

function shoplist(state = [], action) {
    if (action.type === APPEND_TO_SHOPLIST) {
        return [...state, action.product];
    }

    return state;
}

export default function Shoplist(state = [], action) {
    return shoplist(state, action);
}
