import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigator from './Navigator'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navigator />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

