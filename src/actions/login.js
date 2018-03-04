import { push } from 'react-router-redux';

export const LOGIN_OUT = 'LOGIN_OUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_STATUS_CODE = {
    LOGIN: 1,
    LOGOUT: 2,
};

const url = 'http://127.0.0.1:5000';
export const TOKEN_SORAGE_KEY = 'shop_token';

const loginSuccess = (email, status_code = LOGIN_STATUS_CODE.LOGOUT) => ({
    type: LOGIN_SUCCESS, email, status_code,
});

const loginOut = () => ({
    type: LOGIN_OUT,
});

export const logout = () => dispatch => {
    dispatch(loginOut());
    localStorage.removeItem(TOKEN_SORAGE_KEY);
};

export const signUpUser = (email, password) =>
    (dispatch, _getState) => { const encode = btoa(`${ email }:${ password }`);

        fetch(`${ url }/token`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                Authorization: `Basic ${ encode }`,
                Origin: 'http://127.0.0.1',
            },
        })
            .then(response => {
                if (response.ok) return response.json();

                dispatch(logout());
            })
            .then(json => {
                const { token } = json;
                if (token === undefined) return;

                localStorage.setItem(TOKEN_SORAGE_KEY, token);
                dispatch(checkLogin(token));
                dispatch(push('/'));
            })
            .catch(() => {
                dispatch(logout());
            });
    };

export const checkLogin = (token = localStorage.getItem(TOKEN_SORAGE_KEY)) =>
    dispatch => {
        if (!token) return dispatch(logout());
        const data = token.split('.')[1];
        const json = JSON.parse(atob(data));
        const expire_date = Date.parse(json.expire_time);

        if (Date.now() < expire_date) return dispatch(
            loginSuccess(json.user_name, LOGIN_STATUS_CODE.LOGIN)
        );

        return dispatch(logout());
    };
