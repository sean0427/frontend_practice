import fetch from 'isomorphic-fetch'
import * as productslist from '../../actions/ProductsList';

const TEST_ARRAY = ['test', '123'];

describe('Product List Actions', () => {
    it('read product list', () => {
        const expectAction = {
            type: productslist.READ_PRODUCT_LIST,
            list: TEST_ARRAY,
        };

        expect(productslist.readProductsList(TEST_ARRAY))
            .toEqual(expectAction);
    });

    it('read product type', () => {
        const expectAction = {
            type: productslist.READ_PRODUCT_TYPE,
            list: TEST_ARRAY,
        };

        expect(productslist.readProductType(TEST_ARRAY))
            .toEqual(expectAction);
    });

    it('fetch product list', async () => {
        const mockDispatch = jest.fn();

        const result = await productslist.getProductsList()(mockDispatch);
        expect(result).toBeUndefined();
        expect(mockDispatch).toBeCalled();
    });

    it('fetch product type', async () => {
        const mockDispatch = jest.fn();

        const result = await productslist.getProductType()(mockDispatch);
        expect(result).toBeUndefined();
        expect(mockDispatch).toBeCalled();
    });
});
