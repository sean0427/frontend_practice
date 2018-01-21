import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import DataProductsList from '../../containers/DataProductsList';


describe('Test Data Products List Container', () => {
    const mockstore = configureStore([]);
    const initialState = {
        productsList: [
            {
                name: "test",
                imageSource: "source",
                price: 10,
            }
        ],
    };

    it('render defualt with store', () => {
        const store = mockstore(initialState);
        const list = mount(
            <Provider store={store}>
                <DataProductsList />
            </Provider>
        );

        expect(list.find('.products-list')).toHaveLength(1);
        expect(list.find('.products-list').children()).toHaveLength(1);
        expect(list.find('Product')).toHaveLength(1);
    });
});
