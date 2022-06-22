import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import breedsReducer from './breeds';
import factReducer from './fact';

const rootReducer = combineReducers({
  breeds: breedsReducer,
  fact: factReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
