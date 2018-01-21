import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//css
import './css/App.css';

//reducers
import reducers from './reducers';

//containers
import DataNavigator from './containers/DataNavigator';
import DataShopcart from './containers/DataShopcart'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default () => {
    return (
        <Provider store={store}>
            <div className="App">
                <header> <DataNavigator /> </header>
                <div>
                <h2>Shopping Cart List</h2>
                <hr />
                    <DataShopcart />
                </div>
            </div>
        </Provider>
    );
}
