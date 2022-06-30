import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import breedsReducer from './breeds';
import factReducer from './fact';
import carouselReducer from './carousel';

const rootReducer = combineReducers({
  breeds: breedsReducer,
  carousel: carouselReducer,
  fact: factReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
