import { RECEVIE_LANGUAGE } from '../actions/Language';

function language(state = [], action) {
    if (action.type === RECEVIE_LANGUAGE) return (action.list !== undefined)
        ? [...action.list] : state;

    return state;
}

export default (state = [], action) => (
    language(state, action)
);
