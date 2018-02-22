import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Selector from '../../components/Selector';

const TEXT = 'TEXT';
const VALUE = 'VALUE';
const ITEM_COUNT = 2;

const TEST_PROPS = {
    name: TEXT,
    textName: TEXT,
    valueName: VALUE,
    options: [
        { TEXT: 1, VALUE: 'a' },
        { TEXT: 2, VALUE: 'b' },
    ],
};

describe('Test Component Product', () => {
    it('render defualt', () => {
        const component = shallow(<Selector />);

        expect(component.find('label')).toHaveLength(1);
        expect(component.find('select')).toHaveLength(1);
        expect(component.find('option')).toHaveLength(0);
    });

    it('render with props input', () => {
        const component = shallow(<Selector />);

        component.setProps(TEST_PROPS);
        const options = component.find('option');
        expect(options).toHaveLength(ITEM_COUNT);
    });

    it('select chnage', () => {
        const component = mount(<Selector {...TEST_PROPS } />);
        component.find('select').simulate('change', { target: { value: 'b' }});
        expect(component.find('select').props().value).toEqual('b');
    });

    it('check change by snapshot', () => {
        const json = renderer.create(<Selector />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
