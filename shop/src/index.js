import React from 'react';
import ReactDOM from 'react-dom';

// Component
import App from './App';
import Navigator from './components/Navigator';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navigator />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
