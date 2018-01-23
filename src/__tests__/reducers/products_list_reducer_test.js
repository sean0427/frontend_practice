import * as action from '../../actions/ProductsList';
import ProductsList from '../../reducers/ProductsList';

const TEST_ARRAY = [1, 'test'];

describe('Products List Reducer', () => {
    it('init', () => {
        expect(ProductsList(undefined, {}))
            .toEqual([]);
    });

    it('read without state', () => {
        expect(ProductsList(
            undefined,
            {
                type: action.READ_PRODUCT_LIST,
                list: TEST_ARRAY,
            }
        )).toEqual(TEST_ARRAY);
    });

    it('read with state', () => {
        expect(ProductsList(
            [1],
            {
                type: action.READ_PRODUCT_LIST,
                list: TEST_ARRAY,
            }
        )).toEqual(TEST_ARRAY);
    });
});
