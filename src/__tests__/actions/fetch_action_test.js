import * as fetchAction from '../../actions/Fetch';


const TEST_ARRAY = ['test', '123'];
describe('Fetch Actions', () => {
    it('read products', async () => {

        const result = await fetchAction.fetchPost('products');

        console.log(result);
        expect(result).not.toBeNull();
    });

    it('read product by id', async () => {
        const result = await fetchAction.fetchPost('products/1');

        console.log(result)
        expect(result).not.toBeNull();
    });
});
