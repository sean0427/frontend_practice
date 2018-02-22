const HOST = 'http://127.0.0.1:5000/api';

const headers = (method) => ({
    method: method,
    headers: {
        Accept: 'application/json',
        Origin: 'http://127.0.0.1',
    },
    //TODO workaround for dev.
    //mode: 'no-cors',
    mode: 'cors',
});

const _fetch = (method) => (name, _) => fetch(`${ HOST }/${ name }`, headers(method))
    .then(response => (response.ok ? response.json() : undefined));

export const get = _fetch('GET');
export const post = _fetch('POST');
export const deleteAPI = _fetch('DELECT');
export const updateAPI = _fetch('UPDATE');
