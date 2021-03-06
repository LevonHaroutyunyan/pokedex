import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './routes';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
