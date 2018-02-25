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

import { getProductsList, getProductType } from './actions/ProductsList';
import { getLanguage } from './actions/Language';

//containers
import DataNavigator from './containers/DataNavigator';
import DataShopcart from './containers/DataShopcart';
import DataProductsList from './containers/DataProductsList';
import RemoteLogin from './containers/RemoteLogin';
import RouterManager from './components/RouterManager';

//manager
import { TableCompany } from './components/ManagerTable';
import DataManagerProducts from './containers/DataManagerProducts';

const history = createHistory();

const reducersWithRouter = combineReducers({
    data: reducers,
    router: routerReducer,
});


const store = createStore(
    reducersWithRouter,
    applyMiddleware(routerMiddleware(history), thunk)
);
const RouterManagerWithContainer = ({ match }) => (
    <RouterManager match={ match }>
        <Route exact path={ `${ match.url }/company` } component={ TableCompany }/>
        <Route path={ `${ match.url }/product` } component={ DataManagerProducts }/>
    </RouterManager>
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
                    <Route path="/manager" component={RouterManagerWithContainer}/>
                </div>
            </div>
        </ConnectedRouter >
    </Provider>
);

store.dispatch(getProductsList());
store.dispatch(getProductType());
store.dispatch(getLanguage());
