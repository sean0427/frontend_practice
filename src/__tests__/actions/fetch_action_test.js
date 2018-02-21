import * as fetchAction from '../../actions/Fetch';


describe('Fetch Actions', () => {
    it('read products', async () => {

        const result = await fetchAction.fetchPost('products');

        expect(result).not.toBeNull();
    });

    it('read product by id', async () => {
        const result = await fetchAction.fetchPost('products/1');

        expect(result).not.toBeNull();
    });
});
