import React from 'react';
import { shallow } from 'enzyme';

import Navigator from '../../components/Navigator';

describe('test shopcart component', () => {
    const NUMBER = 999;
    const HEADER_CHILDREN = 2;

    it('render defualt', () => {
        const wrapper = shallow(<Navigator />);

        expect(wrapper.find('header').children()).toHaveLength(HEADER_CHILDREN);
        expect(wrapper.find('.shopcart-count').text())
            .toEqual('0');
    });

    it('render with props', () => {
        const wrapper = shallow(<Navigator />);

        wrapper.setProps({ shopcartNumber: NUMBER });

        expect(wrapper.find('em.shopcart-count').text())
            .toEqual(String(NUMBER));
    });
});
