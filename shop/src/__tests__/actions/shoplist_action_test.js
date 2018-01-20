import * as shoplist from '../../actions/Shoplist'

const TEST_TEXT = "test";

describe('Shoplist Action', () => {
    it('append', () => {
        const expectAction = {
            type: shoplist.APPEND_TO_SHOPLIST,
            product: TEST_TEXT,
        };

        expect(shoplist.appendToShoplist(TEST_TEXT))
            .toEqual(expectAction);
    });
});
