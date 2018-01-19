import React from 'react';
import { shallow, mount } from 'enzyme';

import Shopcart from '../../components/Shopcart.js';

describe('test shopcart component', () => {
    it('render defualt', () => {
        const wrapper = shallow(<Shopcart />);

        expect(wrapper.find('.shoplist')).toHaveLength(1);
        expect(wrapper.find('#shoplist-btn')).toHaveLength(1);
    });

    it('render list', () => {
        const wrapper = shallow(<Shopcart />);

        expect(wrapper.find('li')).toHaveLength(0);

        wrapper.setProps({ shoplist: [1, 2] });

        expect(wrapper.find('ul.shoplist').children()).toHaveLength(2);
    });

    it('button click', () => {
        const mockFunction = jest.fn();
        const wrapper = shallow(<Shopcart onPress= {mockFunction} />);

        const button = wrapper.find('button#shoplist-btn')

        button.simulate('click');

        expect(button).toHaveLength(1);
        expect(mockFunction).toBeCalled();
    });
});
