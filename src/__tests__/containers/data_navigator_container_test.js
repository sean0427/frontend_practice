import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
                <Router>
                    <DataNavigator />
                </Router>
            </Provider>
        );

        expect(wrapper.find('.shopcart-count')).toHaveLength(1);
        expect(wrapper.find('.shopcart-count').text())
            .toEqual(String(initialState.shoplist.length));
    });
});
