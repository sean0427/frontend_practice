import { getFromAPI } from './API';

const API_PRODUCT_NAME = 'products';
const API_PRODCUT_TYPE = 'product_type';

export const RECEIVE_PRODUCT_LIST = 'RECEIVE_PRODUCT_LIST';
export const RECEIVE_PRODUCT_TYPE = 'RECEIVE_PRODUCT_TYPE';

export const receiveProductsList = list => (
    { type: RECEIVE_PRODUCT_LIST, list }
);

export const receiveProductType = list => (
    { type: RECEIVE_PRODUCT_TYPE, list }
);

export const getProductsList = getFromAPI(API_PRODUCT_NAME, receiveProductsList);
export const getProductType = getFromAPI(API_PRODCUT_TYPE, receiveProductType);
