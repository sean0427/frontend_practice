/* eslint-env node */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Test Setup file
 * defind by create-react-app
 * @see initializing test {@link https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment}
 **/

Enzyme.configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
