import React from 'react';
import { shallow } from 'enzyme';

import Shopcart from '../../components/Shopcart.js';

describe('test shopcart component', () => {
    it('render defualt', () => {
        const wrapper = shallow(<Shopcart />);

        expect(wrapper.find('.shoplist')).toHaveLength(1);
        expect(wrapper.contains(<button id="shoplist-btn"/>)).toBe(true);
    });
});
