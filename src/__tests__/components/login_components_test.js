import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Login from '../../components/Login.js';

const LOGIN_FROM_CHILDREND = 3;

describe('test login component', () => {
    it('render defualt', () => {
        const wrapper = shallow(<Login />);

        expect(wrapper.find('.login')).toHaveLength(1);
        expect(wrapper.find('.login').children()).toHaveLength(LOGIN_FROM_CHILDREND);
    });

    it('button click', () => {
        const mockFunction = jest.fn();
        const wrapper = mount(<Login onPress={mockFunction} />);

        wrapper.find('input[name="email"]')
            .simulate('change', { target: { value: 'test@email.test' } });
        wrapper.find('input[name="password"]')
            .simulate('change', { target: { value: 'passworddd' } });
        wrapper.find('form').simulate('submit');

        expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
        expect(mockFunction).toBeCalled();
    });

    it('check change by snapshot', () => {
        const json = renderer.create(<Login />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
