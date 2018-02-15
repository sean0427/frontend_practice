import * as action from '../../actions/ProductsList';
import ProductsList from '../../reducers/Products';

const TEST_ARRAY = [1, 'test'];

describe('Products Reducer', () => {
    it('init', () => {
        expect(ProductsList(undefined, {}))
            .toEqual({list: [], type:[]});
    });

    it('read without state', () => {
        expect(ProductsList(
            undefined,
            {
                type: action.READ_PRODUCT_LIST,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: TEST_ARRAY,
            type: []
        });
    });

    it('read with state', () => {
        expect(ProductsList(
            [1],
            {
                type: action.READ_PRODUCT_LIST,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: TEST_ARRAY,
            type: []
        });
    });

    it('read type without state', () => {
        expect(ProductsList(
            undefined,
            {
                type: action.READ_PRODUCT_TYPE,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: [],
            type: TEST_ARRAY
        });
    });

    it('read type with state', () => {
        expect(ProductsList(
            [1],
            {
                type: action.READ_PRODUCT_TYPE,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: [],
            type: TEST_ARRAY
        });
    });
});
