import { get, post, updateAPI, deleteAPI } from './Fetch';

export const RECEIVE_LANGEUAGE_PRODUCT = 'RECEIVE_LANGEUAGE_PRODUCT';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_PRODUCT_INFORMATION = 'RECEIVE_PRODUCT_INFORMATION';

export const API_COMPANY = 'companies';
export const API_LANGUAGE_PRODUCT = 'language_products';
export const API_PRODUCT_INFORMATION = 'product_info';
//const DEFAULT_SIZE = 10;
// receive sattus change. does'not contorl data.

const receiveAPIsList = type => list => (
    { type: type, list }
);

export const receiveCompaniseList = receiveAPIsList(RECEIVE_COMPANY);
export const receiveLanguageProduct = receiveAPIsList(RECEIVE_LANGEUAGE_PRODUCT);
export const receiveProductInformation = receiveAPIsList(RECEIVE_PRODUCT_INFORMATION);

const handleFetch = (method = get) =>
    (url, action) =>
        (query = '', data = '', id = '') =>
            async (dispatch, _getState) => {
                let _url = url;

                if (id !== '') _url = `${ url }/${ id }`;
                if (query !== '') _url = `${ url }?${ query }`;

                const json = await method(_url, data);

                return json !== undefined
                    ? dispatch(action(json))
                    : '{}'; //TODO not get products list handler
            };

export const getFromAPI = handleFetch(get);
export const getCompanyList = getFromAPI(API_COMPANY, receiveCompaniseList);
export const getLanguageProduct = getFromAPI(API_LANGUAGE_PRODUCT, receiveLanguageProduct);
export const getProductInformation = getFromAPI(API_PRODUCT_INFORMATION, receiveProductInformation);

export const insertNew = handleFetch(post);
export const remove = handleFetch(deleteAPI);
export const update = handleFetch(updateAPI);
