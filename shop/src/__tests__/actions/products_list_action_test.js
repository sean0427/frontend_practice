import * as productslist from '../../actions/ProductsList'

const TEST_ARRAY = ['test', 123];
describe('Product List Actions', () => {
    it('read', () => {
        const expectAction = {
            type: productslist.READ_PRODUCT_LIST,
            list: TEST_ARRAY,
        };

        expect(productslist.readProductsList(TEST_ARRAY))
            .toEqual(expectAction);
    })
});
