import { fetchPost } from './Fetch'

const READ_LANGEUAGE_PRODUCT = 'READ_LANGEUAGE_PRODUCT';
const READ_COMPANY = 'READ_COMPANY';

const API_COMPANY = 'company';
const API_LANGUAGE_PRODUCT = 'language_products'

// receive sattus change. does'not contorl data.

export const receiverCompaniseList = list => (
    { type: READ_COMPANY, list }
);

export const receiverLanguageProduct = list => (
    { type: READ_LANGEUAGE_PRODUCT, list }
);

export const getFromAPI = (url, action) => 
    (size = 10, order = 0, value = '', key = 0) => 
        async (dispatch, _getState) => {
        const json = await fetchPost(`${url}?size=${size}&order=${order}&key=${key}&value=${value}`)
        console.log(json)
        if (json !== undefined) return dispatch(action(json));

        //TODO not get products list handler 
    };

export const getCompanyList = getFromAPI(API_COMPANY, receiverCompaniseList);
export const getLanguageProduct = getFromAPI(API_LANGUAGE_PRODUCT, receiverLanguageProduct);
