import * as action from '../../actions/Language';
import Language from '../../reducers/Language';

const TEST_TEXT = 'test';

describe('Language reducer', () => {
    it('init', () => {
        expect(Language(undefined, {}))
            .toEqual([]);
    });

    it('update data without state', () => {
        expect(Language(undefined, {
            type: action.RECEVIE_LANGUAGE,
            list: [TEST_TEXT],
        }))
            .toEqual([TEST_TEXT]);
    });

    it('update data with state', () => {
        expect(Language([1], {
            type: action.RECEVIE_LANGUAGE,
            list: [TEST_TEXT],
        }))
            .toEqual([TEST_TEXT]);
    });
});
