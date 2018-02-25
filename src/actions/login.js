import { push } from 'react-router-redux';

export const LOGIN_FAIL = 'LOGIN_FAIL';
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

const loginFail = () => ({
    type: LOGIN_FAIL,
});

export const signUpUser = (email, password) =>
    (dispatch, _getState) => {
        const encode = btoa(`${ email }:${ password }`);

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

                dispatch(loginFail);
            })
            .then(json => {
                const { token } = json;
                if (token === undefined) return;

                localStorage.setItem(TOKEN_SORAGE_KEY, token);
                dispatch(loginSuccess(email, LOGIN_STATUS_CODE.LOGIN));
                dispatch(push('/'));
            })
            .catch(() => {
                dispatch(loginFail());
                localStorage.removeItem(TOKEN_SORAGE_KEY);
            });
    };
