import * as productslist from '../../actions/ProductsList';
import * as language from '../../actions/Language';

//MOCK
import { getFromAPI } from '../../actions/API';


jest.mock('../../actions/API', () => ({ getFromAPI: jest.fn() }));

const TEST_ARRAY = ['test', '123'];

const DEFULAT_FUNCTION = () => {
    //Not do anything
};

const testAction = (action = '', f = DEFULAT_FUNCTION) => () => {
    const expectAction = {
        type: action,
        list: TEST_ARRAY,
    };

    expect(f(TEST_ARRAY)).toEqual(expectAction);
};

const testFetchAction = (f = DEFULAT_FUNCTION) => () => {
    f();
    expect(getFromAPI).toBeCalled();
};

describe('Product List Actions', () => {
    it('receive product list',
        testAction(
            productslist.RECEIVE_PRODUCT_LIST,
            productslist.receiveProductsList
        )
    );


    it('fetch product list', testFetchAction(productslist.getProductsList)
    );
});

describe('Product Type Actions', () => {
    it('receive',
        testAction(productslist.RECEIVE_PRODUCT_TYPE,
            productslist.receiveProductType
        )
    );

    it('fetch', testFetchAction(productslist.getProductType));
});

describe('Language Actions', () => {
    it('receive',
        testAction(
            language.RECEVIE_LANGUAGE,
            language.recevieLanguage
        )
    );

    it('fetch', testFetchAction(language.getLanguage));
});
