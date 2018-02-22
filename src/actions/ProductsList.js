import { getFromAPI } from './API';

const API_PRODUCT_NAME = 'products';
const API_PRODCUT_TYPE = 'product_type';

export const READ_PRODUCT_LIST = 'READ_PRODUCT_LIST';
export const READ_PRODUCT_TYPE = 'READ_PRODUCT_TYPE';

export const readProductsList = list => (
    { type: READ_PRODUCT_LIST, list }
);

export const readProductType = list => (
    { type: READ_PRODUCT_TYPE, list }
);

export const getProductsList = getFromAPI(API_PRODUCT_NAME, readProductsList);
export const getProductType = getFromAPI(API_PRODCUT_TYPE, readProductType);
