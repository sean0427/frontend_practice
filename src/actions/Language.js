import { getFromAPI } from './API';

const API_LANUAGE = 'language';

export const RECEVIE_LANGUAGE = 'RECEVIE_LANGUAGE';

export const recevieLanguage = list => (
    { type: RECEVIE_LANGUAGE, list }
);

export const getLanguage = getFromAPI(API_LANUAGE, recevieLanguage);
