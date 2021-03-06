import React from 'react';
import { render, ReactDOM } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes/root';
import Root from './containers/Root';

import configureStore from './store/configureStore';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Root store={store} history={history} routes={routes} />,
    document.getElementById('content')
);