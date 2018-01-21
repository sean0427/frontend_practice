import React from 'react';
import { shallow, mount } from 'enzyme';

import ProductsList from '../../components/ProductsList';


describe('Test ProductsList Component', () => {
    const TEST_PROPS = {
        pageNumber: 0,
        products: [
            {
                name: "test",
                imageSource: "source",
                price: 10,
            }
        ],
    };

    it('render defualt', () => {
        const list = shallow(<ProductsList />);

        expect(list).toHaveLength(1);
        expect(list.find('.products-list')).toHaveLength(1);
        expect(list.find('.products-list').children()).toHaveLength(0);
    });

    it('render one props', () => {
        const list = mount(<ProductsList />);

        list.setProps(TEST_PROPS);
        expect(list).toHaveLength(1);

        expect(list.find('.products-list')).toHaveLength(1);
        expect(list.find('.products-list').children()).toHaveLength(1);
        expect(list.find('Product')).toHaveLength(1);
    });
});
