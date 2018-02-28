import { TOKEN_SORAGE_KEY } from './login';

const HOST = 'http://127.0.0.1:5000/api';

const get_headers = (method) => ({
    method,
    headers: {
        Accept: 'application/json',
        Origin: 'http://127.0.0.1',
        Authorization: `Basic ${ btoa(`${ localStorage.getItem(TOKEN_SORAGE_KEY) }:unused`) }`,
        'Content-Type': 'application/json',
    },
    mode: 'cors',
});

const _fetch = (method) =>
    (name, body) => {
        const headers = get_headers(method);

        if (method != 'GET') Object.assign(headers, { body: body });

        return fetch(`${ HOST }/${ name }`, headers)
            .then(response => (response.ok ? response.json() : undefined));
    };

export const get = _fetch('GET');
export const post = _fetch('POST');
export const deleteAPI = _fetch('DELETE');
export const updateAPI = _fetch('PUT');
