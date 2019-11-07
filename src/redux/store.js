import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import rootReducers from './rootReducers';


export default createStore(
  combineReducers(rootReducers),
  initialState,
  composeWithDevTools(),
);
