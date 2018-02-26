import { get, post } from './Fetch';

const READ_LANGEUAGE_PRODUCT = 'READ_LANGEUAGE_PRODUCT';
const READ_COMPANY = 'READ_COMPANY';

const API_COMPANY = 'companies';
const API_LANGUAGE_PRODUCT = 'language_products';
const API_PRODUCT_INFORMATION = 'product_info';
//const DEFAULT_SIZE = 10;
// receive sattus change. does'not contorl data.

export const receiverCompaniseList = list => (
    { type: READ_COMPANY, list }
);

export const receiverLanguageProduct = list => (
    { type: READ_LANGEUAGE_PRODUCT, list }
);

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
export const getCompanyList = getFromAPI(API_COMPANY, receiverCompaniseList);
export const getLanguageProduct = getFromAPI(API_LANGUAGE_PRODUCT, receiverLanguageProduct);

export const insertNew = handleFetch(post);
export const insertCompany = insertNew(API_COMPANY,
    ( ) => {
        //do nothing.
    });

export const insertNewProduct = insertNew(API_PRODUCT_INFORMATION,
    ( ) => {
        //do nothing.
    });
