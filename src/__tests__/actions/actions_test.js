
import fetch from 'isomorphic-fetch'
import * as productslist from '../../actions/ProductsList';
import * as language from '../../actions/Language';

//MOCK
import { getFromAPI } from '../../actions/API';


jest.mock('../../actions/API', () => ({ getFromAPI: jest.fn() }));

const TEST_ARRAY = ['test', '123'];

const testAction = (action = '', f = ()=> {}) => () => {
    const expectAction = {
        type: action,
        list: TEST_ARRAY,
    };

    expect(f(TEST_ARRAY)).toEqual(expectAction);
};

const testFetchAction = (f = () => {}) => () => {
    f();
    expect(getFromAPI).toBeCalled();
};

describe('Product List Actions', () => {
    it('read product list',
        testAction(
            productslist.READ_PRODUCT_LIST,
            productslist.readProductsList
        )
    );


    it('fetch product list', testFetchAction(productslist.getProductsList)
    );
});

describe('Product Type Actions', () => {
    it('read',
        testAction(productslist.READ_PRODUCT_TYPE,
            productslist.readProductType
        )
    );

    it('fetch', testFetchAction(productslist.getProductType));
})

describe('Language Actions', () => {
    it('read',
        testAction(
            language.RECEVIE_LANGUAGE,
            language.recevieLanguage
        )
    );

    it('fetch', testFetchAction(language.getLanguage));
})
