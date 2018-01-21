import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import DataNavigator from '../../containers/DataNavigator';


describe('test data shopcart container', () => {
    const mockstore = configureStore([]);
    const initialState = {
        shoplist: [1, 0],
    };

    it('render with connect store', () => {
        const store = mockstore(initialState);
        const wrapper = mount(
            <Provider store={store}>
                <DataNavigator />
            </Provider>
        );

        expect(wrapper.find('.shopcart-number')).toHaveLength(1);
        expect(wrapper.find('.shopcart-number').text())
            .toEqual(String(initialState.shoplist.length));
    });
});
