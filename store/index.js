import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [promise, thunk];

if (process.env.NODE_ENV === 'development' && typeof window != 'undefined') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (typeof devToolsExtension === 'function') {
    console.log('Redux Devtools Extension Enabled!');
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const initStore = () => {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancers
  )
}