import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Product from '../../components/Product';

const TEST_PROPS = { 
    imageSource: "test.test/test.jpg",
    name: "PRODUCT NAME",
    price: 10000,
};

describe('Test Component Product', () => {
    it('render defualt', () => {
        const component = shallow(<Product />);

        expect(component).toHaveLength(1);
        expect(component.find('section')).toHaveLength(1);
        expect(component.find('img')).toHaveLength(1);
        expect(component.find('h5')).toHaveLength(1);
        expect(component.find('em')).toHaveLength(1);
    });

    it('render with props input', () => {
        const component = shallow(<Product />);

        component.setProps(TEST_PROPS);

        expect(component.find('img').prop('src')).toEqual(TEST_PROPS.imageSource);
        expect(component.find('h5').text()).toEqual(TEST_PROPS.name);
        expect(component.find('em').text()).toEqual(String(TEST_PROPS.price));

    });

    it('check change by snapshot', () => {
        const json = renderer.create(<Product />).toJSON();
        expect(json).toMatchSnapshot();
    });
});
