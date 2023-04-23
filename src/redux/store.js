import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const loggerMiddleware = createLogger();
const middleware = [thunk, loggerMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
