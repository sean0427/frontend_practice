import { RECEIVE_MANAGER_DATA, RECEIVE_MANAGER_MESSAGE } from '../actions/Manager';

export default (state = {}, action) => ({
    list: action.type === RECEIVE_MANAGER_DATA ? action.list : state.list,
    massage: action.type === RECEIVE_MANAGER_MESSAGE
        ? action.message : state.message,
});
