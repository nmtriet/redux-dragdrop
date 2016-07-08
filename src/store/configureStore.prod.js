import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = routerMiddleware(browserHistory);

// Middleware you want to use in production:
const enhancer = applyMiddleware(middleware, thunk);

export default function configureStore(initialState) {
    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    return createStore(rootReducer, initialState, enhancer);
};