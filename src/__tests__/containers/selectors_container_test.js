import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import ProductTypeSelector from '../../containers/ProductTypeSelector';
import LanguageSelector from '../../containers/LanguageSelector';
import Selector from '../../components/Selector';

const PRODUCT_TYPE_STATE = {
    products: {
        type: [
            {
                id: 1,
                name: 'test',
            },
            {
                id: 2,
                name: '222',
            },
        ],
    }
};

const LANGUAGE_STATE = {
    language: [
        { code: 'c', name: 'cha' },
        { code: 'e', name: 'engl' },
    ],
};

const selector_test = (initialState, Container) => () => {
    const mockstore = configureStore();

    it('render defualt with store', () => {
        const store = mockstore(initialState);
        const list = mount(
            <Provider store={store}>
                <Container />
            </Provider>
        );

        expect(list.find(Selector)).toHaveLength(1);
        expect(list.find('option')).toHaveLength(2);
        expect(list.find('select')).toHaveLength(1);
    });
}

describe('Test Product type selector Container', selector_test(PRODUCT_TYPE_STATE, ProductTypeSelector));
describe('Test LanguageSelector Container', selector_test(LANGUAGE_STATE, LanguageSelector));
