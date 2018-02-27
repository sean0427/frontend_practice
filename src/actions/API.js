import { get, post } from './Fetch';

export const RECEIVE_LANGEUAGE_PRODUCT = 'RECEIVE_LANGEUAGE_PRODUCT';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_PRODUCT_INFORMATION = 'RECEIVE_PRODUCT_INFORMATION';

const API_COMPANY = 'companies';
const API_LANGUAGE_PRODUCT = 'language_products';
const API_PRODUCT_INFORMATION = 'product_info';
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
        (query = '', data = '') =>
            async (dispatch, _getState) => {
                const json = await method(`${ url }?${ query }`, data);

                return json !== undefined
                    ? dispatch(action(json))
                    : '{}'; //TODO not get products list handler
            };

export const getFromAPI = handleFetch(get);
export const getCompanyList = getFromAPI(API_COMPANY, receiveCompaniseList);
export const getLanguageProduct = getFromAPI(API_LANGUAGE_PRODUCT, receiveLanguageProduct);
export const getProductInformation = getFromAPI(API_PRODUCT_INFORMATION, receiveProductInformation);

export const insertNew = handleFetch(post);
export const insertCompany = insertNew(API_COMPANY,
    ( ) => {
        //do nothing.
    });

export const insertNewProduct = insertNew(API_PRODUCT_INFORMATION,
    ( ) => {
        //do nothing.
    });
