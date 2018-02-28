import * as action from '../../actions/ProductsList';
import ProductsList from '../../reducers/Products';

const TEST_ARRAY = [1, 'test'];

describe('Products Reducer', () => {
    it('init', () => {
        expect(ProductsList(undefined, {}))
            .toEqual({list: [], type: []});
    });

    it('receive without state', () => {
        expect(ProductsList(
            undefined,
            {
                type: action.RECEIVE_PRODUCT_LIST,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: TEST_ARRAY,
            type: [],
        });
    });

    it('receive with state', () => {
        expect(ProductsList(
            [1],
            {
                type: action.RECEIVE_PRODUCT_LIST,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: TEST_ARRAY,
            type: [],
        });
    });

    it('receive type without state', () => {
        expect(ProductsList(
            undefined,
            {
                type: action.RECEIVE_PRODUCT_TYPE,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: [],
            type: TEST_ARRAY,
        });
    });

    it('receive type with state', () => {
        expect(ProductsList(
            [1],
            {
                type: action.RECEIVE_PRODUCT_TYPE,
                list: TEST_ARRAY,
            }
        )).toEqual({
            list: [],
            type: TEST_ARRAY,
        });
    });
});
