import { API_COMPANY, API_PRODUCT_INFORMATION,
    insertNew, getFromAPI,
    remove, update,
} from './API';

export const RECEIVE_MANAGER_DATA = 'RECEIVE_LANGEUAGE_PRODUCT';
export const RECEIVE_MANAGER_MESSAGE = 'RECEIVE_LANGEUAGE_MESSAGE';

export const receiveManagerData = list => (
    { type: RECEIVE_MANAGER_DATA, list }
);

export const receiveManagerMessage = message => (
    { type: RECEIVE_MANAGER_DATA, message }
);

export const insertCompany = insertNew(API_COMPANY, receiveManagerMessage);
export const deleteCompany = remove(API_COMPANY, receiveManagerMessage);
export const updateCompany = update(API_COMPANY, receiveManagerMessage);

export const insertProduct
    = insertNew(API_PRODUCT_INFORMATION, receiveManagerMessage);
export const deleteProduct
    = remove(API_PRODUCT_INFORMATION, receiveManagerMessage);
export const updateProduct
    = update(API_PRODUCT_INFORMATION, receiveManagerMessage);

export const getManagerCompanyData
    = getFromAPI(API_COMPANY, receiveManagerData);
export const getManagerProductInformation
    = getFromAPI(API_PRODUCT_INFORMATION, receiveManagerData);
