import { LOGIN_OUT, LOGIN_SUCCESS, LOGIN_STATUS_CODE } from '../actions/login';

function email(state = '', action) {
    switch (action.type) {
    case LOGIN_SUCCESS:
        return action.email;
    case LOGIN_OUT:
        return '';
    default:
        return state;
    }
}

function user_state(state = LOGIN_STATUS_CODE.LOGOUT, action) {
    if (action.type === LOGIN_SUCCESS) return action.status_code;
    else if (action.type === LOGIN_OUT) return LOGIN_STATUS_CODE.LOGOUT;

    return state;
}

export default (state = {}, action) => ({
    email: email(state.email, action),
    user_state: user_state(state.user_state, action),
});
