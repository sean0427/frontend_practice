import React from 'react';
import { shallow } from 'enzyme';

import Navigator from '../../components/Navigator';

describe('test shopcart component', () => {
    const NUMBER = 999;

    it('render defualt', () => {
        const wrapper = shallow(<Navigator />);

        expect(wrapper.find('header').children()).toHaveLength(2);
        expect(wrapper.find('.shopcart-number').text())
            .toEqual('0');
    });

    it('render with props', () => {
        const wrapper = shallow(<Navigator />);

        wrapper.setProps({ shopcartNumber: NUMBER });

        expect(wrapper.find('h1.shopcart-number').text())
            .toEqual(String(NUMBER));
    });
});
