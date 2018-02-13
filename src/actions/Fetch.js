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

export const fetchPost = (name) => (
    fetch(`${HOST}/${name}`, headers('GET'))
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        console.log(response);
    })
    .catch(e => console.log(e))
);

const _fetch = (method) => (name, body) => (
    fetch(`${HOST}/${name}`, headers(method))
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        console.log(response);
    })
    .catch(e => console.log(e))
);

export const post = _fetch('POST')
export const deleteAPI = _fetch('DELECT')
export const updateAPI = _fetch('UPDATE')
