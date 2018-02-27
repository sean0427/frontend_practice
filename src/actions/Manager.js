import { API_COMPANY, API_PRODUCT_INFORMATION, insertNew, getFromAPI } from './API';

export const RECEIVE_MANAGER_DATA = 'RECEIVE_LANGEUAGE_PRODUCT';
export const RECEIVE_MANAGER_MESSAGE = 'RECEIVE_LANGEUAGE_MESSAGE';

export const receiveManagerData = list => (
    { type: RECEIVE_MANAGER_DATA, list }
);

export const receiveManagerMessage = message => (
    { type: RECEIVE_MANAGER_DATA, message }
);

export const insertCompany = insertNew(API_COMPANY, receiveManagerMessage);
export const insertNewProduct = insertNew(API_PRODUCT_INFORMATION, receiveManagerMessage);

export const getManagerCompanyData = getFromAPI(API_COMPANY, receiveManagerData);
export const getManagerProductInformation = getFromAPI(API_PRODUCT_INFORMATION, receiveManagerData);
