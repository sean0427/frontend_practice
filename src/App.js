import React from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//Router
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

//css
import './css/App.css';

//reducers
import reducers from './reducers';

//containers
import DataNavigator from './containers/DataNavigator';
import DataShopcart from './containers/DataShopcart';
import DataProductsList from './containers/DataProductsList';
import RemoteLogin from './containers/RemoteLogin';

const history = createHistory();

const reducersWithRouter = combineReducers({
    data: reducers,
    router: routerReducer,
});

const store = createStore(
    reducersWithRouter,
    applyMiddleware(routerMiddleware(history), thunk)
);

export default () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
                <header> <DataNavigator /> </header>
                <div>
                    <Route exact path="/" component={DataProductsList}/>
                    <Route path="/shopcart" component={DataShopcart}/>
                    <Route path="/login" component={RemoteLogin}/>
                </div>
            </div>
        </ConnectedRouter >
    </Provider>
);
