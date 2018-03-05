import { createStore } from 'redux';
import { gameReducer } from './reducers/'

/* eslint-disable no-underscore-dangle */
export default createStore(gameReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */