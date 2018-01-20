import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import DataShopcart from '../../containers/DataShopcart.js';


describe('test data shopcart container', () => {
    const mockstore = configureStore([]);
    const initialState = {
        shoplist: [1, 2],
    };

    it('render defualt', () => {
        const store = mockstore(initialState);
        const wrapper = mount(
            <Provider store={store}>
                <DataShopcart />
            </Provider>
        );

        expect(wrapper.find('.shoplist')).toHaveLength(1);
        expect(wrapper.find('#shoplist-btn')).toHaveLength(1);

        expect(wrapper.find('.shoplist').children()).toHaveLength(2);
    });
});
