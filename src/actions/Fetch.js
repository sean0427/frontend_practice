import { TOKEN_SORAGE_KEY } from './login';

const HOST = 'http://127.0.0.1:5000/api';

const headers = (method, body) => ({
    method,
    headers: {
        Accept: 'application/json',
        Origin: 'http://127.0.0.1',
        Authorization: `Basic ${btoa(localStorage.getItem(TOKEN_SORAGE_KEY) + ':unused')}`,
        'Content-Type': 'application/json',
    },
    body,
    mode: 'cors',
});

const _fetch = (method) =>
    (name, body) =>
        fetch(`${ HOST }/${ name }`, headers(method, body))
            .then(response => (response.ok ? response.json() : undefined));

export const get = _fetch('GET');
export const post = _fetch('POST');
export const deleteAPI = _fetch('DELECT');
export const updateAPI = _fetch('UPDATE');
