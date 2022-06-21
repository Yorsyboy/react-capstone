import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import breeds from './breeds';

const store = createStore(breeds, applyMiddleware(thunk));

export default store;
