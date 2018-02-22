import reducers from '../../reducers';

import { createStore } from 'redux';

const DEFULAT_PRODUCT = { list: [], type: [] };

test('default', () => {
    const store = createStore(reducers);

    expect(store.getState().products).toEqual(DEFULAT_PRODUCT);
    expect(store.getState().language).toEqual([]);
    expect(store.getState().shoplist).toEqual([]);
});
