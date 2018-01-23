import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//css
import './css/App.css';

//reducers
import reducers from './reducers';

//containers
import DataNavigator from './containers/DataNavigator';
import DataShopcart from './containers/DataShopcart';
import DataProductsList from './containers/DataProductsList';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default () => (
    <Provider store={store}>
        <Router>
            <div className="App">
                <header> <DataNavigator /> </header>
                <div>
                    <Route exact path="/" component={DataProductsList}/>
                    <Route path="/shopcart" component={DataShopcart}/>
                </div>
            </div>
        </Router>
    </Provider>
);
