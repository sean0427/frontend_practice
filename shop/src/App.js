import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//css
import './css/App.css';

//reducers
import reducers from './reducers';

//containers
import DataShopcart from './containers/DataShopcart.js'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h2>Shopping Cart List</h2>
                <hr />
                <div>
                    <DataShopcart />
                </div>
            </div>
        </Provider>
    );
}
