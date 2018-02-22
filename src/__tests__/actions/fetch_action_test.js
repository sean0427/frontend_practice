import * as action from '../../actions/Fetch';

const TEST_JSON = JSON.stringify({ 'test': 'test' });

const test = f => () => {
    it('fetch success', async () => {

        fetch.mockResponse(TEST_JSON);
        const result = await f('products');

        expect(result).toEqual(JSON.parse(TEST_JSON));
    });

    it('fetch fail', async () => {
        fetch.mockResponse(TEST_JSON, { status: 404 });

        const result = await f('products/1');

        expect(result).toBeUndefined();
    });
};

describe('Fetch Action Get', test(action.get));
describe('Fetch Action Post', test(action.post));
describe('Fetch Action Delete', test(action.deleteAPI));
describe('Fetch Action Update', test(action.updateAPI));
