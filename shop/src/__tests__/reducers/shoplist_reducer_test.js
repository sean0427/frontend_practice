import * as action from '../../actions/Shoplist';
import Shoplist from '../../reducers/Shoplist';

const TEST_TEXT = 'test';

describe('Shoplist reducer', () => {
    it('init', () => {
        expect(Shoplist(undefined, {}))
            .toEqual([]);
    });

    it('update data without state', () => {
        expect(Shoplist(undefined, {
            type: action.APPEND_TO_SHOPLIST,
            product: TEST_TEXT,
        }))
            .toEqual([TEST_TEXT]);
    });

    it('update data with state', () => {
        expect(Shoplist([1], {
            type: action.APPEND_TO_SHOPLIST,
            product: TEST_TEXT,
        }))
            .toEqual([1, TEST_TEXT]);
    });
});
